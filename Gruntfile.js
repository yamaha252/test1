module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		loadGruntTasks: {
			pattern: ['grunt-*']
		},
		config: {
			pkg: grunt.file.readJSON('package.json')
		}
	});
};