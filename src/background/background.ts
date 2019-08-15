import { Channel } from '../channel';

const i: number = 5;
const j: string = 'hello';

console.log(`${j} ${i}`);

// chrome.runtime.onConnect.addListener(function(port: chrome.runtime.Port) {
//   if (port.name !== 'dataServices') return;

//   port.onMessage.addListener(function(msg: any) {
//     if (msg.channel === 'update') {
//       console.log(msg.message);
//     } else {
//       console.log(msg.channel);
//     }
//   });
// });

const xChannel = new Channel<string>('data');
xChannel.subscribe(function(event: string) {
  console.log(event);
})

const yChannel = new Channel<string>('test');
yChannel.publish('pub-sub to content works!!!');
