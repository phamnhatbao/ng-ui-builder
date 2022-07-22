#!/usr/bin/env node
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const { cd } = require('shelljs');
const { arrLibNames } = require('./libraries.const');

const projectDir = join(__dirname, '../projects');

const rootPackage = join(projectDir, '../package.json');
const currentVersion = JSON.parse(readFileSync(rootPackage, 'utf8')).version;

for (const libName of arrLibNames) {
  const packagePath = join(projectDir, libName, 'package.json');
  const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
  packageJson.version = currentVersion;
  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}
