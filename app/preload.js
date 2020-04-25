const { contextBridge, ipcRenderer } = require('electron');
const customTitlebar = require('custom-electron-titlebar');
const titlebar = new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex('#00adff')
});

contextBridge.exposeInMainWorld(
  'electron',
  {
    setWindowTitleBarColor: (setWindowTitleBarColor) => {
      titlebar.updateBackground(customTitlebar.Color.fromHex(setWindowTitleBarColor));
      return setWindowTitleBarColor;
    },
    customApi: (customApi) => {
      ipcRenderer.send('customApi', customApi)
    }
  }
)
