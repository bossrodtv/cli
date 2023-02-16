#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import { APPS, APP_TYPES, PACKAGE_MANAGERS, PACKAGE_MANAGER_TYPES } from './constants';
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
  inquirer.prompt<{ appType: APP_TYPES }>([
    {
      name: 'appType',
      type: 'list',
      message: 'Select your application:',
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
  inquirer.prompt<{ packageManager: PACKAGE_MANAGER_TYPES }>([
    {
      name: 'packageManager',
      type: 'list',
      message: 'What package manager do you want?:',
      choices: PACKAGE_MANAGERS,
      default: 'pnpm',
    },
  ]);

/* Handler */
const run = async () => {
  const { appName } = await askAppName();

  if (isFolderAlreadyExist(appName)) {
    console.log(chalk.red('> Folder already exists.'));
    process.exit();
  }

  console.log(chalk.green('- Sounds good!'));

  const { appType } = await askAppType();

  console.log(chalk.green('- Great choice!'));

  const { isInstallDependencies } = await askInstallDependencies();

  let packageManager: PACKAGE_MANAGER_TYPES | null = null;

  if (isInstallDependencies) console.log(chalk.green('- Your wish is my command.'));

  const cloneCommand = `git clone --depth 1 https://github.com/constrod/template-${appType}-ts ${appName}`;

  const { error: errorClone } = runCommand(cloneCommand);
  if (errorClone) process.exit(-1);

  console.log(chalk.green('- Repository is cloned successfully.'));

  const cleanCommand = `cd ${appName} && rm -rf .git`;

  const { error: errorClean } = runCommand(cleanCommand);
  if (errorClean) return process.exit(-1);

  if (isInstallDependencies) {
    packageManager = (await askPackageManager()).packageManager;

    const installCommand = `cd ${appName} && ${packageManager} install`;

    const { error: errorInstall } = runCommand(installCommand);
    if (errorInstall) return process.exit(-1);

    console.log(chalk.green('- Installing the dependencies.'));
  }

  console.log(gradient.mind(figlet.textSync('Happy Hacking', { horizontalLayout: 'full' })));
  console.log('\n');
  console.log(chalk.green('- You are now ready to build your amazing app.'));
  console.log(chalk.green('- Navigate to your project:'));
  console.log(chalk.cyan(`> cd ${appName}`));
  return;
};

run();
