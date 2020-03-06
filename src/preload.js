const { contextBridge, ipcRenderer } = require('electron')
const customTitlebar = require('custom-electron-titlebar');

contextBridge.exposeInMainWorld(
  'electron',
  {
    setWindowTitleBarColor: (setWindowTitleBarColor) => {
      new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex(setWindowTitleBarColor)
      });
      ipcRenderer.send('setWindowTitleBarColor', setWindowTitleBarColor)
    },
    customApi: (customApi) => {
      ipcRenderer.send('customApi', customApi)
    }
  }
)
