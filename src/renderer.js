const { ipcRenderer } = require('electron')

// listen for the form to be submitted
const submitListener = document
  .querySelector('form')
  .addEventListener('submit', (event) => {
    // prevent default behavior that causes page refresh
    event.preventDefault()

    const files = document.getElementById('filePicker').files
    console.log(files)
  })
