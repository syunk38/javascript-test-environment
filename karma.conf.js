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
        browsers: ['ChromeCanary'],
        frameworks: ['mocha', 'power-assert'],
        reporters: ['mocha', 'coverage'],
        logLevel: config.LOG_DEBUG
    })
}
