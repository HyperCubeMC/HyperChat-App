var packageJSON = require('./package.json');
module.exports = {
  packagerConfig: {
    "icon": "./src/favicon.ico"
  },
  "make_targets": {
    "win32": ["squirrel"], // An array of win32 make targets
    "darwin": ["zip", "dmg"], // An array of darwin make targets
    "linux": ["deb", "rpm", "flatpak", "snap"] // An array of linux make targets
  },
  makers: [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "setupExe": `${packageJSON.productName}-${packageJSON.version}-Setup.exe`
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
