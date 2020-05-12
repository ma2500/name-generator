const assert = require('assert')
const renderName = require('.')

const name = renderName()

assert(typeof name == 'string')

// preview
console.log(name) // > Nyx
