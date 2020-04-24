var packageJSON = require('./package.json');
module.exports = {
  "packagerConfig": {
    "icon": "./page/assets/favicon"
  },
  "make_targets": {
    "win32": ["squirrel", "zip"],
    "darwin": ["dmg", "zip"],
    "linux": ["deb", "rpm", "zip"]
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "setupExe": `${packageJSON.productName}-${packageJSON.version}-Setup.exe`,
        "setupIcon": "./page/assets/favicon.ico",
        "iconUrl": "./page/assets/favicon.ico",
        "loadingGif": "./app/assets/Installing.gif"
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
