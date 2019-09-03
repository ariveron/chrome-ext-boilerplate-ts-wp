import { ContentPageLink } from '../ContentPageLink';
import { ChannelFactory } from '../ChannelFactory';

const pageLink = new ContentPageLink();
const channelFactory = new ChannelFactory(pageLink);
const channel = channelFactory.openChannel<string>('test-channel');
channel.publish('this is a test from a content page!');
console.log(channelFactory.getContext());