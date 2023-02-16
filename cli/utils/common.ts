import { execSync } from 'child_process';
import fs from 'fs';

export const isFolderAlreadyExist = (filePath: string) => fs.existsSync(filePath);

export const runCommand = (command: string) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    return { error };
  }
  return { error: null };
};
