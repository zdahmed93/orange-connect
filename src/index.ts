import auth from './helpers/authentication'
import axios from 'axios'

interface Options {
  authorizationHeader: string,
  to: string,
  from: string,
  senderName?: string,
  message: string
}

export async function sendSMS(options: Options) {
  const {authorizationHeader, from, to, message, senderName} = options;
  return new Promise(async (resolve, reject) => {
    try {
      const { access_token } = await auth(authorizationHeader)
      const { data } = await axios.post(`https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B${from.replace('+', '')}/requests`, {
        outboundSMSMessageRequest: {
          address: `tel:${to}`,
          senderAddress: `tel:${from}`,
          senderName,
          outboundSMSTextMessage: {
            message
          }
        }
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      })
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
  
}
