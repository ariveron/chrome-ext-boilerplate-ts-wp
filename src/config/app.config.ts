/*
  Think of this file as akin to the web.config file
  used by IIS web applications. We should store application
  configuration settings here, and then reference this
  object from our scripts. If any changes need to be made
  to these settings in the future, we should only need to change
  it here.
*/

export const appConfig = {
  general: {
    extensionName: 'sfx',
    extensionId: '555',
    chromeExtensionProtocol: 'chrome-extension:'
  },
  libraries: {
    PubSub: {
      portMessageType: 'PubSub',
      urlPattern: 'https://*/*'
    }
  },
  services: {},
  models: {},
  background: {},
  content: {},
  popup: {},
  options: {}
};
