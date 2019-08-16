import { BPort } from '../b-port';

const bPort = new BPort();
bPort.addListener((message: any, port: chrome.runtime.Port) => {
  console.log(`background - message: ${message}`);
  console.log(`background - port tab id: ${port.sender.tab.id}`);
  bPort.sendMessage('this is a message sent from the background page');
});
