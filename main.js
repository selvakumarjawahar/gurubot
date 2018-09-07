/* jshint esversion: 6 */

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;


function createWindow () {
  win = new BrowserWindow({width: 700, height: 600});

  // load the dist folder from Angular
  win.loadFile('dist/gurubot/index.html');


  // Open the DevTools optionally:
  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});