'use strict';
const{ app, BrowserWindow, globalShortcut, Menu, dialog } = require('electron');
const isDev = require('electron-is-dev');

let mainWindow = null;

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('will-quit', () => {
    mainWindow = null;
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        frame: true,
        show: true,
    });

    mainWindow.maximize();
    mainWindow.loadURL(`file://${__dirname}/index.html?isDev=${isDev}`);

    if(isDev) {
        const loadDevtool = require('electron-load-devtool');
        loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
        loadDevtool(loadDevtool.REDUX_DEVTOOLS);
    }

    const reloadShortcutRegistration = globalShortcut.register('CommandOrControl+R', () => {
        if(mainWindow) {
            mainWindow.loadURL(`file://${__dirname}/index.html?isDev=${isDev}`);
        }
    });

    const template = [
        {
            label: 'redux-test',
            submenu: [
                {
                    label: 'Restart',
                    click: () => mainWindow.reload(),
                },
                {
                    label: 'DevTools',
                    accelerator: 'Alt+CmdOrCtrl+J',
                    click: () => mainWindow.webContents.openDevTools({ mode: 'detach' }),
                },
                {
                    label: 'Quit App',
                    accelerator: 'Command+Q',
                    click: () => app.quit(),
                },
                {
                    type: 'separator',
                }
            ],
        }, {
            label: 'Edit',
            submenu: [{
                label: 'Undo',
                accelerator: 'CmdOrCtrl+Z',
                selector: 'undo:'
            }, {
                label: 'Redo',
                accelerator: 'Shift+CmdOrCtrl+Z',
                selector: 'redo:'
            }, {
                type: 'separator'
            }, {
                label: 'Cut',
                accelerator: 'CmdOrCtrl+X',
                selector: 'cut:'
            }, {
                label: 'Copy',
                accelerator: 'CmdOrCtrl+C',
                selector: 'copy:'
            }, {
                label: 'Paste',
                accelerator: 'CmdOrCtrl+V',
                selector: 'paste:'
            }, {
                label: 'Select All',
                accelerator: 'CmdOrCtrl+A',
                selector: 'selectAll:'
            }]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    app.on('activate', () => {
        mainWindow.show();
    });
});
