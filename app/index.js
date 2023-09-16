'use strict';

const electron = require("electron");
const app = electron.app;
const path = require('path');

const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        icon: path.join(__dirname, 'build/xuange.png'),
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow();
});

app.on('ready', function() {
    

});

app.on('window-all-closed', function() {
    app.quit();
});

const { ipcMain } = require("electron")

ipcMain.on("selectFolder", (event, arg) => {
  electron.dialog.showOpenDialog({
    properties: ["openDirectory"]
    }).then(result => {
        event.reply("selectedFolder", result.filePaths[0])
    }
    );
});