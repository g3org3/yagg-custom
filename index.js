#! /usr/bin/env node

const _gen = require('yagg')(__dirname)

// My Custom Generator
const context = {
  generatorName: 'changeMe'
}

// clone app
_gen.cloneTemplateStructure(context)