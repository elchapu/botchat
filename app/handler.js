import botkit from 'botkit'
import axios from 'axios'
import fs from 'fs'
import api from './api'
import config from '../config'

const { subscribe_api, message_api, debug, access_token, verify_token, retries } = config.facebook

const controller = botkit.facebookbot({ debug, access_token, verify_token })
const bot = controller.spawn({ retries })

export default async body => {
  const { sender } = body.originalRequest.data
  const { contexts } = body.result 

  try {
    await axios.post(`${subscribe_api}?access_token=${access_token}`)

    controller.log('Successfully subscribed to Facebook events')
    controller.log('Botkit activated')
    controller.startTicking()

    try {
      const attachment = await api(contexts.pop().parameters)
      return await axios({
        method: 'post',
        url: `${message_api}?access_token=${access_token}`,
        data: {
          recipient: { id: sender.id },
          message: { attachment }
        }
      })
    } catch (err) {
      console.error('Api error:', err)
    }
  } catch ({ message }) {
    controller.log('Could not subscribe to page messages', message)
  }
}
