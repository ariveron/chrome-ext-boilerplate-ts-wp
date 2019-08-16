import { CPort } from '../c-port';

const port = new CPort();
port.addListener((message: any, port: chrome.runtime.Port) => {
  console.log(`content - message: ${message}`);
  console.log(`content - port: ${port.name}`);
});
port.sendMessage('this is a message sent from the content page');
