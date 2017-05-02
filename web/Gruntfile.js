module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    './css/style.css': './scss/*.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};