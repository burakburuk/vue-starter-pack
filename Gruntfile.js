module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: true,
                immed: true,
                newcap: false,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true,
                esversion: 6
            },
            all: ['Gruntfile.js', 'package.json', 'src/**/*.js']
        },
        copy: {
            main: {
                files: [
                    {src: ['index.html'], dest: 'build/'}
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('development', ['jshint', 'copy']);

};