const { readFileSync } = require('fs')
const { execSync } = require('child_process')
const path = require('path')

const content = readFileSync('../package.json')

const packageInfo = JSON.parse(content)

if (packageInfo) {
  const version = packageInfo.version
  console.log('version', version)
  execSync(`rm -rf node_modules`)
  execSync(`npm i ../maticnetwork-lxlyjs-${version}.tgz`)
} else {
  throw 'no package found'
}
