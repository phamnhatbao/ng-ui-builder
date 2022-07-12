#!/usr/bin/env node
const { join } = require('path');
const { cd, ls, set, exec } = require('shelljs');

const projectDir = join(__dirname, '../projects');

// Fail if any ShellJS command fails.
set('-e');

// Remove old builds.
console.log('Removing old builds...');
exec('rm -rf ../dist');
console.log('Removing old builds... done.');
console.log();

cd(projectDir);

const arrLibNames = ls();

// Build each library.
for (const libName of arrLibNames) {
  exec(`ng build ${libName}`);
}
