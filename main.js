const path = require('path')
const { app, BrowserWindow } = require('electron')

// declare this as a variable globally so we can
// reference it and so it will not be garbage collected
let mainWindow

// wait for the main process to be ready
app.on('ready', () => {
  // path to our html
  const htmlPath = path.join('src', 'index.html')

  console.log(htmlPath)

  // create a browser window
  mainWindow = new BrowserWindow()

  mainWindow.loadFile(htmlPath)
})
