import { Port } from '../Port';

const port = new Port();

port.addListener((message, port) => {
  console.log(message);
});

port.postMessage('hello');
