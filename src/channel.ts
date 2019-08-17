export class Channel<T> {
  constructor() {

  }

}

class SChannel extends Channel<string> {
  
}

const av: any = {};
av.Env = {
    isChromeExt: function(){
        return !!(window['chrome'] && window['chrome']['extension'])
    },
    getContext: function(){
        var loc = window.location.href;
        if(!!(window['chrome'] && window['chrome']['extension'])){
            if(/^chrome/.test(loc)){
                if(window == chrome.extension.getBackgroundPage()){
                    return 'background';
                }else{
                    return 'extension';
                }
            }else if( /^https?/.test(loc) ){
                return 'content';
            }
        }else{
            return window.location.protocol.replace(':','');
        }
    }
};