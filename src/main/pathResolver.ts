import path from "path";
import { app } from "electron";
import { isDev } from "./util.js";

export const getPreloadPath = () => {
  const appPath: string = path.join(
    app.getAppPath(),
    isDev() ? "resource-owl" : ".",
    "/dist-electron/preload.cjs"
  );
  console.log(appPath);
  return appPath;
};
