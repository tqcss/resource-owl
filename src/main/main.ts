import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { getSystemData, pollResources } from "./resourceManager.js";

app.on("ready", () => {
  const mainWindow: BrowserWindow = new BrowserWindow({});

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(`${app.getAppPath()}/dist-react/index.html`));
  }

  const systemData: SystemData = getSystemData();
  pollResources(systemData);
});
