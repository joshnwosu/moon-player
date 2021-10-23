const { ipcRenderer, contextBridge } = require("electron");
const { platform } = require("os");
// can be accessed through window.app
contextBridge.exposeInMainWorld("moonPlayer", {
  sayHello: (arg) => ipcRenderer.invoke("say.hello", arg),
});
