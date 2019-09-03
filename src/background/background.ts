import { BackgroundPageLink } from '../BackgroundPageLink';
import { ChannelFactory } from '../ChannelFactory';

// const link = new BackgroundPageLink();
// link.addListener((message, port) => {
//   console.log(`${port.sender.tab.id}: ${message}`);
//   link.broadcast('this is from the background page!')
// });

const pageLink = new BackgroundPageLink();
const channelFactory = new ChannelFactory(pageLink);
const channel = channelFactory.openChannel<string>('test-channel');
channel.subscribe(message => {
  console.log(message);
});
console.log(channelFactory.getContext());
