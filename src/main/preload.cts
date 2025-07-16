const electron = require("electron");
// import electron from "electron";

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: any) => void) => callback({}),
  getSystemData: () => console.log("static"),
});
