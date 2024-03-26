const {resolve} = require('path')
const {addDecoratorsLegacy,override} = require('customize-cra')

const custom = () => config => {
  config.resolve.alias['@'] = resolve('./src')
  return config
}

module.exports = override(addDecoratorsLegacy(),custom())