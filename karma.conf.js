// Karma configuration
// Generated on Mon Aug 22 2016 22:44:18 GMT-0300 (BRT)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',
		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],
		// list of files / patterns to load in the browser
		files: [
			'app/bower_components/jquery/dist/jquery.min.js',
			'app/bower_components/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/ng-describe/dist/ng-describe.js',
			'app/bower_components/angular-ui-router/release/angular-ui-router.js',
			// Add here the application files and the rest of dependencies
			'test/**/*.js'
		],
		// list of files to exclude
		exclude: [],
		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			"app/!(bower_components)/**/!(*.spec).js": ["coverage"],
			"**/*.html": ["ng-html2js"]
		},
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: [
			'coverage', 'spec'
		],
		coverageReporter: {
			type: "lcov",
			dir: "reports",
			subdir: "coverage",
			check: {
				global: {
					statements: 75,
					branches: 75,
					functions: 75,
					lines: 75
				}
			}
		},
		specReporter: {
			suppressErrorSummary: true,
			suppressFailed: false,
			suppressPassed: false,
			suppressSkipped: false
		},
		// web server port
		port: 9876,
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.INFO,
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,
		browserNoActivityTimeout: 30000,
		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
