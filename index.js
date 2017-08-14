#! /usr/bin/env node

const yagg = require('yagg')(__dirname)

// Tokens to be replaced in /app
const context = {
  generatorName: 'changeMe'
}

// node modules to be installed
const deps = [
  'yagg'
]

yagg.cloneTemplateStructure(context)
yagg.installDeps(deps)