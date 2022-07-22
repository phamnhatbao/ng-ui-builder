#!/usr/bin/env node
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const { cd } = require('shelljs');
const { arrLibNames } = require('./libraries.const');

function buildPackage() {
  const distDir = join(__dirname, '../dist/ngx-ui-builder');
  
  cd(distDir);
  
  const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
  
  for (const libName of arrLibNames.filter(libName => libName !== 'root')) {
    const packageExports = JSON.parse(
      readFileSync(`./${libName}/package.json`, 'utf8')
    ).exports['.'];
  
    for (const key in packageExports) {
      if (Object.hasOwnProperty.call(packageExports, key)) {
        packageExports[key] = packageExports[key].replace(/\.\//, `./${libName}/`);
      }
    }
  
    packageJson.exports[`./${libName}`] = packageExports;
  }
  
  writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
}

module.exports = { buildPackage };