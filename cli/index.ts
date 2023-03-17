#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import { APPS, AppType, PackageManagerType, PACKAGE_MANAGERS } from './constants';
import { isFolderAlreadyExist, runCommand } from './utils';

/* Welcome Page */
clear();
console.log(gradient.mind(figlet.textSync('bossROD TV', { horizontalLayout: 'full' })));

/* Questions */
const askAppName = () =>
  inquirer.prompt<{ appName: string }>([
    {
      name: 'appName',
      type: 'input',
      message: 'What is your project name?:',
      default: 'my-app',
    },
  ]);

const askAppType = () =>
  inquirer.prompt<{ appType: AppType }>([
    {
      name: 'appType',
      type: 'list',
      message: 'What tool do you want to use?:',
      choices: APPS,
    },
  ]);

const askInstallDependencies = () =>
  inquirer.prompt<{ isInstallDependencies: boolean }>([
    {
      name: 'isInstallDependencies',
      type: 'confirm',
      message: 'Do you want to install the dependencies?:',
      default: false,
    },
  ]);

const askPackageManager = () =>
  inquirer.prompt<{ packageManager: PackageManagerType }>([
    {
      name: 'packageManager',
      type: 'list',
      message: 'What package manager do you want to use?:',
      choices: PACKAGE_MANAGERS,
      default: 'pnpm',
    },
  ]);

/* Handler */
const run = async () => {
  let hasError = false;
  let cloneCmd = '';
  let removeGitCmd = '';
  let installCommand = '';
  let packageManager: PackageManagerType | null = null;

  const { appName } = await askAppName();

  if (isFolderAlreadyExist(appName)) {
    console.log(chalk.red('> Folder already exists.'));
    process.exit();
  }

  console.log(chalk.green('- Sounds good!'));

  const { appType } = await askAppType();

  console.log(chalk.green('- Great choice!'));

  const { isInstallDependencies } = await askInstallDependencies();

  if (isInstallDependencies) console.log(chalk.green('- Your wish is my command.'));

  const cleanCmd = `rm -rf ${appName}`;
  cloneCmd = `git clone --depth 1 https://github.com/constrod/template-${appType}-ts ${appName}`;
  removeGitCmd = `cd ${appName} && rm -rf .git`;

  if (isInstallDependencies) {
    if (appType === 'react-native') {
      console.log(chalk.yellow('- Note: Only pnpm is supported for react-native.'));
      packageManager = 'pnpm';
    } else {
      const answer = await askPackageManager();
      packageManager = answer.packageManager;
    }

    const installOption = packageManager === 'npm' ? '--legacy-peer-deps' : '';
    installCommand = `cd ${appName} && ${packageManager} install ${installOption}`;
  }

  const { error: cloneCmdError } = runCommand(cloneCmd);
  if (cloneCmdError) hasError = true;
  const { error: removeGitCmdError } = runCommand(removeGitCmd);
  if (removeGitCmdError) hasError = true;

  console.log(chalk.green('- Project created successfully.'));

  if (isInstallDependencies && packageManager) {
    const { error: errorInstall } = runCommand(installCommand);
    if (errorInstall) hasError = true;
    console.log(chalk.green('- Installing the dependencies.'));
  }

  if (hasError) {
    console.log(chalk.red('- Cleaning up...'));
    const { error: cleanCmdError } = runCommand(cleanCmd);
    if (cleanCmdError) process.exit(-1);
    console.log(chalk.green('- Clean up successfully.'));
    process.exit(-1);
  }

  console.log(gradient.mind(figlet.textSync('Happy Hacking', { horizontalLayout: 'full' })));
  console.log('\n');
  console.log(chalk.green('- You are now ready to build your amazing project.'));
  console.log(chalk.green('- Navigate to your project:'));
  console.log(chalk.cyan(`> cd ${appName}`));
  return;
};

run();
