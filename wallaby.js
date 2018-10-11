module.exports = function(wallaby) {
  process.env.NODE_PATH = require('path').join(__dirname, './node_modules')
  return {
    files: [
      'src/**/*.js*',
      { pattern: 'babel.config.js', instrument: false },
      '!src/**/__tests__/*-test.js'
    ],

    tests: ['src/**/__tests__/*-test.js'],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    env: {
      type: 'node',

      params: {
        env: 'LOCAL_PATH=' + process.cwd()
      }
    },

    testFramework: 'jest',

    delays: {
      run: 1000
    }
  }
}
