/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// preload.js
const { contextBridge, ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
});

// contextBridge.exposeInMainWorld('api', {
//   send: (channel, data) => {
//     let validChannels = ['toMain'];
//     if (validChannels.includes(channel)) {
//       ipcRenderer.send(channel, data);
//     }
//   },
//   receive: (channel, func) => {
//     let validChannels = ['fromMain'];
//     if (validChannels.includes(channel)) {
//       ipcRenderer.on(channel, (event, ...args) => func(...args));
//     }
//   }
// });