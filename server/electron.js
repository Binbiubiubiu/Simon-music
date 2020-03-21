// `主进程`入口
const electron = require('electron');
const platform = require('os').platform(); // 获取平台：https://nodejs.org/api/os.html#os_os_platform
// 控制app生命周期.
const app = electron.app;
// 浏览器窗口.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

console.log(platform);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // 创建一个浏览器窗口.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false, // 这样可以在 webview 中加载/显示本地计算机的图片。
    },
  });

  // 这里要注意一下，这里是让浏览器窗口加载网页。
  // 如果是开发环境，则url为http://localhost:3000（package.json中配置）
  // 如果是生产环境，则url为build/index.html
  const startUrl = 'http://localhost:3000'; // ||
  // url.format({
  //   pathname: path.join(__dirname, '/../build/index.html'),
  //   protocol: 'file:',
  //   slashes: true,
  // });
  // 加载网页之后，会创建`渲染进程`
  mainWindow.loadURL(startUrl);

  // 打开chrome浏览器开发者工具.
  if (startUrl.startsWith('http')) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});
