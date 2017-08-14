#! /usr/bin/env node

const _gen = require('yagg')(__dirname)

// My Custom Generator
const context = {
  appName: 'sample',
  port: 8000
}

// clone app
_gen.cloneTemplateStructure(context)