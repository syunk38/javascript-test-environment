module.exports = function(config) {
    config.set({
        files: [
            'app/app.js',
            'test/*Spec.js'
        ],
        preprocessors: {
            'app/app.js': ['coverage'],
            'test/*Spec.js': ['espower']
        },
        browsers: ['ChromeCanary_headless'],
        frameworks: ['mocha', 'power-assert'],
        reporters: ['mocha', 'coverage'],
        customLaunchers: {
            ChromeCanary_headless :{
                base: 'ChromeCanary',
                flags: ['--no-sandbox', '--headless', '--disable-gpu', ' --remote-debugging-port=9222']
            }
        },
        logLevel: config.LOG_DEBUG
    })
}
