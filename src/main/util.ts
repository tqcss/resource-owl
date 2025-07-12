const BYTES_IN_GIGABYTE: number = 1_000_000_000;
const MEGABYTES_IN_GIGABYTE: number = 1_000;
const MEBIBYTES_IN_GIBIBYTE: number = 1_024;

export const isDev = (): boolean => {
  return process.env.NODE_ENV === "developnent";
};

export const byteToGigabyte = (bytes: number): number => {
  return bytes / BYTES_IN_GIGABYTE;
};

export const megabytesToGigabyte = (megabyte: number): number => {
  return megabyte / MEGABYTES_IN_GIGABYTE;
}

export const mebibyteToGibiByte = (mebibyte: number): number => {
  return mebibyte / MEBIBYTES_IN_GIBIBYTE;
};
