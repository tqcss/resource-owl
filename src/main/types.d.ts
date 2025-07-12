type StorageData = {
    total: number,
    free: number,
    usage: number,
}

type SystemData = {
    cpuModel: string,
    storageData: StorageData,
    totalMemoryGB: number,
}