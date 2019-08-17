import { Ports } from '../Ports';

const ports = new Ports();
ports.addListener((mesesage, port) => {
  console.log(`${port.sender.tab.id}: ${mesesage}`);
  ports.postMessage('10-4');
});
