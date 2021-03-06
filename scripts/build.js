#!/usr/bin/env node
const { join } = require('path');
const { cd, set, exec } = require('shelljs');

const { buildPackage } = require('./fetch-exports-package-to-root');
const { arrLibNames } = require('./libraries.const');

const projectDir = join(__dirname, '../projects');

// Fail if any ShellJS command fails.
set('-e');

// Remove old builds.
console.log('Removing old builds...');
exec('rm -rf ../dist');
console.log('Removing old builds... done.');
console.log();

cd(projectDir);

// Build each library.
for (const libName of arrLibNames) {
  exec(`ng build ${libName}`);
}

console.log('Building packages...');
buildPackage();
console.log('Building packages... done.');
