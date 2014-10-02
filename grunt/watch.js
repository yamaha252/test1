module.exports =  {
	options: {
		debounceDelay: 100,
		livereload: true
	},
	all: {
		files: [
			'less/**/*.less',
			'js/**/*.js',
			'images/src/*.png'
		],
		tasks: 'default'
	}
};