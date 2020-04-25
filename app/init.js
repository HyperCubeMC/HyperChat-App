const { app, BrowserWindow, screen, dialog, autoUpdater, ipcMain } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Get the width and height of the user display to show window maximized.
  const {width, height} = screen.getPrimaryDisplay().workAreaSize;
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, './preload.js')
    }
  });
  mainWindow.setMenuBarVisibility(false);
  // And load the index.html of the app.
  mainWindow.loadFile('./page/chat.html');
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.show();
  });
};

const updater = () => {
  const appTag = require('../package.json').tag;
  const appVersion = '1.' + appTag + '.0';

  // The url that the application is going to query for new release
  const autoUpdateURL = 'https://api.update.rocks/update/github.com/hypercubemc-github/HyperChat-App/stable/' + process.platform + '/' + appVersion;

  if (process.platform === 'linux') {
    console.log('Auto updates not available on linux.');
  }
  else {
    windowsUpdate();
  }

  function windowsUpdate() {
    autoUpdater.on(
      'error',
      (err) => console.log(`Update error: ${err.message}`));

    autoUpdater.on(
      'checking-for-update',
      () => console.log('Checking for updates...'));

    autoUpdater.on(
      'update-available',
      () => console.log('Update available!'));

    autoUpdater.on(
      'update-not-available',
      () => console.log('No update available.'));

    // Ask the user if update is available
    autoUpdater.on(
      'update-downloaded',
      (event, releaseNotes, releaseName) => {
        console.log('Update downloaded!')
        dialog.showMessageBox({
          type: 'question',
          buttons: ['Update', 'Cancel'],
          defaultId: 0,
          message: `Version ${releaseName} is available, do you want to install it now?`,
          title: 'Update available'
        }, response => {
          if (response === 0) {
            autoUpdater.quitAndInstall()
          }
        });
      }
    )

    autoUpdater.setFeedURL(autoUpdateURL);
    autoUpdater.checkForUpdates();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // ipcMain.on('setWindowTitleBarColor', (event, arg) => {
  //   console.log("Set title bar color: " + arg);
  // })
  createWindow();
  updater();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
