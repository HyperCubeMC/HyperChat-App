var packageJSON = require('./package.json');
module.exports = {
  "packagerConfig": {
    "icon": "./page/icon"
  },
  "make_targets": {
    "win32": ["squirrel"],
    "darwin": ["zip", "dmg"],
    "linux": ["deb", "rpm", "flatpak", "snap"]
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "setupExe": `${packageJSON.productName}-${packageJSON.version}-Setup.exe`,
        "setupIcon": "./page/icon.ico"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-dmg",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {}
    }
  ]
}
