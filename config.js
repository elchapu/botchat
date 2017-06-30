export default {
  api: {
    name: 'botchat webhook',
    port: 6000
  },
  facebook: {
    subscribe_api: 'https://graph.facebook.com/v2.6/me/subscribed_apps',
    message_api: 'https://graph.facebook.com/v2.6/me/messages',
    access_token: 'FACEBOOK_ACCESS_TOKEN',
    verify_token: 'FACEBOOK_VERIFY_TOKEN',
    debug: false,
    retries: 500
  }
}
