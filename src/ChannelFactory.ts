import { IPageLink } from './IPageLink.interface';
import { Channel } from './Channel';

export class ChannelFactory {
  private pageLink: IPageLink;

  constructor(pageLink: IPageLink) {
    this.pageLink = pageLink;
  }

  public openChannel = <T>(name: string): Channel<T> => {
    return new Channel<T>(this.pageLink, name);
  };

  public getContext = () => {
    var loc = window.location.href;
    if (!!(window['chrome'] && window['chrome']['extension'])) {
      if (/^chrome/.test(loc)) {
        if (window == chrome.extension.getBackgroundPage()) {
          return 'background';
        } else {
          return 'extension';
        }
      } else if (/^https?/.test(loc)) {
        return 'content';
      }
    } else {
      return window.location.protocol.replace(':', '');
    }
  };
}

// const av: any = {};
// av.Env = {
//   isChromeExt: function() {
//     return !!(window['chrome'] && window['chrome']['extension']);
//   },
//   getContext: function() {
//     var loc = window.location.href;
//     if (!!(window['chrome'] && window['chrome']['extension'])) {
//       if (/^chrome/.test(loc)) {
//         if (window == chrome.extension.getBackgroundPage()) {
//           return 'background';
//         } else {
//           return 'extension';
//         }
//       } else if (/^https?/.test(loc)) {
//         return 'content';
//       }
//     } else {
//       return window.location.protocol.replace(':', '');
//     }
//   }
// };
