import fs from "fs";
import { flatten } from "lodash";
import path from "path";

export function getFileList(directory: string): string[] {
  const files = fs
    .readdirSync(directory)
    .map(filename => path.join(directory, filename));

  const result = files.map(file => {
    const stats = fs.statSync(file);
    return stats.isDirectory() ? getFileList(file) : file;
  });

  return flatten(result);
}
