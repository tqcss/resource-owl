import osUtils from "os-utils";
import os from "os";
import fs, { StatsFs } from "fs";
import { megabytesToGigabyte } from "./util.js";

const POLLING_INTERVAL: number = 1000;

export const getSystemData = () => {
  const statsFs: StatsFs = getStatsFs();

  const cpuModel: string = os.cpus()[0].model;
  const storageData: StorageData = getStorageData(statsFs);
  const totalMemoryGB: number = Math.floor(
    megabytesToGigabyte(osUtils.totalmem())
  );

  return { cpuModel, storageData, totalMemoryGB };
};

export const pollResources = (systemData: SystemData) => {
  setInterval(async () => {
    const cpuUsage: number = await getCpuUsage();
    const ramUsage: number = getRamUsage();
    const storageUsage: number = systemData.storageData.usage;
    // console.log({ cpuUsage, ramUsage, storageUsage });
  }, POLLING_INTERVAL);
};

const getStatsFs = (): StatsFs => {
  return fs.statfsSync(process.platform === "win32" ? "C://" : "/");
};

const getCpuUsage = (): Promise<number> => {
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve);
  });
};

const getRamUsage = (): number => {
  return 1 - osUtils.freememPercentage();
};

const getStorageData = (statsFs: StatsFs): StorageData => {
  const totalBytes = statsFs.bsize * statsFs.blocks;
  const freeBytes = statsFs.bsize * statsFs.bfree;

  return {
    total: totalBytes,
    free: freeBytes,
    usage: 1 - freeBytes / totalBytes,
  };
};
