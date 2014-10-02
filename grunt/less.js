module.exports = {
	main: {
		options: {
			compress: true,
			sourceMap: true,
			sourceMapFilename: "assets/css/styles.min.css.map",
			sourceMapURL: "styles.min.css.map"
		},
		src: [
			'less/styles.less'
		],
		dest: 'assets/css/styles.min.css'
	}
};
