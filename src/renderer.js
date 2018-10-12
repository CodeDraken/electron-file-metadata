'use strict'

const { ipcRenderer } = require('electron')

// listen for the form to be submitted
const submitListener = document
  .querySelector('form')
  .addEventListener('submit', (event) => {
    // prevent default behavior that causes page refresh
    event.preventDefault()

    // an array of files with some metadata
    const files = [...document.getElementById('filePicker').files]

    // format the file data to only path and name
    const filesFormatted = files.map(({ name, path: pathName }) => ({
      name,
      pathName
    }))

    // send the data to the main process
    ipcRenderer.send('files', filesFormatted)
  })

// metadata from the main process
ipcRenderer.on('metadata', (event, metadata) => {
  const pre = document.getElementById('data')

  pre.innerText = JSON.stringify(metadata, null, 2)
})

// error event from catch block in main process
ipcRenderer.on('metadata:error', (event, error) => {
  console.error(error)
})
