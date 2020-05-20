import * as https from 'https';

interface ResolveInterface {
  token_type: string, 
  access_token: string, 
  expires_in: string
}

export default function (authorizationHeader: string) {

  return new Promise<ResolveInterface>((resolve, reject) => {
    const postData = "grant_type=client_credentials";
    const options = {
      host: 'api.orange.com',
      path: '/oauth/v2/token',
      method: 'POST',
      headers: {
        'Authorization': authorizationHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }
    const req = https.request(options, (response) => {
      response.setEncoding('utf8');
      let responseData;
      response.on('data', (data) => { responseData = data });
      response.on('end', () => {
        responseData = JSON.parse(responseData);
        if (responseData.access_token) {
          resolve(responseData)
        }
        if (responseData.error) {
          reject(responseData)
        }
      });
    }).on('error', (e) => { reject(e) });
    req.write(postData);
    req.end();
  })
  
}
