module.exports = function (wallaby) {
    process.env.NODE_PATH = require('path').join(__dirname, '../../node_modules')
    return {
        files: [
            'src/**/*.js*',
            { pattern: 'src/**/*.css', instrument: false },
            { pattern: 'src/fonts/*.*', instrument: false },
            { pattern: 'src/lib/*', instrument: false },
            '!src/**/__tests__/*-test.js',
            '!src/images/*',
        ],

        tests: ['src/**/__tests__/*-test.js'],

        filesWithNoCoverageCalculated: ['src/index.js', 'src/__tests__/*.js'],

        hints: {
            ignoreCoverage: /ignore coverage/,
        },

        compilers: {
            '**/*.js':  wallaby.compilers.babel(),
            '**/*.jsx': wallaby.compilers.babel(),
        },

        env: {
            type:   'node',

            params: {
                env: 'LOCAL_PATH=' + process.cwd(),
            },
        },

        testFramework: 'jest',

        delays: {
            run: 1000,
        },
    }
}