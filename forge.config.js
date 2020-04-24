const packageJSON = require('./package.json');
module.exports = {
  "packagerConfig": {
    "name": `${packageJSON.productName}`,
    "executableName": `${packageJSON.productName}`,
    "icon": "./page/assets/favicon"
  },
  "make_targets": {
    "win32": ["zip", "squirrel"],
    "darwin": ["zip", "dmg"],
    "linux": ["zip", "deb", "rpm"]
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": `${packageJSON.productName}`,
        "setupExe": `${packageJSON.productName}-${packageJSON.version}-Setup.exe`,
        "setupIcon": "./page/assets/favicon.ico",
        "icon": "./page/assets/favicon.ico"
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "config": {}
    },
    {
      "name": "@electron-forge/maker-deb",
      "config": {
        "options": {
          "name": `${packageJSON.productName}`
        }
      }
    },
    {
      "name": "@electron-forge/maker-dmg",
      "config": {
        "name": `${packageJSON.productName}`
      }
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {
        "options": {
          "name": `${packageJSON.productName}`
        }
      }
    }
  ]
}
