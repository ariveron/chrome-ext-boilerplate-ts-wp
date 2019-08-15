import { Channel } from '../channel';

console.log('this is the content page');

// const dataServicesPort = chrome.runtime.connect({ name: 'dataServices' });
// dataServicesPort.postMessage({
//   channel: 'update',
//   message: 'hello'
// });

const aChannel = new Channel<string>('data');
aChannel.publish('pub-sub to background works again!!!');

const bChannel = new Channel<string>('test');
bChannel.subscribe(function(event: string) {
  console.log(event);
})