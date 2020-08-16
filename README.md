# orange-connect
Connect your NodeJs server to the Orange SMS API

## Installing

Using npm:
```bash
npm install orange-connect
```

Using yarn:
```bash
yarn add orange-connect
```

## Example
```js
const { sendSMS } = require('orange-connect')

sendSMS({
      authorizationHeader: "Basic ******************************==", // Your Authorization Header that you get from your Orange SMS APP Settings
      from: "+21600000000", // Your Orange account's phone number
      to: "+21600000000",
      message: "Hello from orange-connect :)"
}).then(response => {
    console.log("response", response);
}).catch(error => {
    console.log("error", error)
})

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function sendMessage() {
  try {
    const response = await sendSMS({
      authorizationHeader: "Basic ******************************==", // Your Authorization Header that you get from your Orange SMS APP Settings
      from: "+21600000000", // Your Orange account's phone number
      to: "+21600000000",
      message: "Hello from orange-connect :)"
    })
    console.log("response", response);
  } catch (error) {
    console.log("error", error);
  }
}

sendMessage() // Don't forget to invoke it

```

## TypeScript
orange-connect includes [TypeScript](http://typescriptlang.org) definitions.
```typescript
import { sendSMS } from 'orange-connect';
```

## License

[MIT](LICENSE)

## Author
- Ahmed Zribi [@zdahmed93](https://github.com/zdahmed93)

