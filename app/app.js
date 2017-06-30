import restify from 'restify'
import bodyParser from 'body-parser'
import queryParser from 'query-parser'
import config from '../config'
import handler from './handler'

const { api, facebook } = config
const port = Number.parseInt(process.argv[2], 0) || api.port
const server = restify.createServer({ name: api.name })

// Middlewares
server.use(restify.CORS())
server.use(restify.queryParser())
server.use(restify.bodyParser())

// Endpointss
server.get('/', (req, res) => res.send('home'))

// Webhooks
server.get('/webhook', ({ query }, res) => {
  res.send(query['hub.mode'] === 'subscribe' && query['hub.verify_token'] === facebook.verify_token ? query['hub.challenge'] : 'Incorrect verify token')
  
})

server.post('/webhook', ({ body }, res) => {
  handler(body)
  res.send('ok')
})

server.listen(port, () => console.log('%s listening at %s', api.name, server.url))