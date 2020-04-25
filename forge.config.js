const packageJSON = require('./package.json');
module.exports = {
  "packagerConfig": {
    "name": `${packageJSON.productName}`,
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
          "name": `${packageJSON.productName}`,
          "bin": `${packageJSON.productName}`
        }
      }
    },
    {
      "name": "@electron-forge/maker-dmg",
      "config": {
        "name": `${packageJSON.productName}`,
        "out": `./out/make/${packageJSON.productName}-1.0.0.dmg`
      }
    },
    {
      "name": "@electron-forge/maker-rpm",
      "config": {
        "options": {
          "name": `${packageJSON.productName}`,
          "bin": `${packageJSON.productName}`
        }
      }
    }
  ]
}
