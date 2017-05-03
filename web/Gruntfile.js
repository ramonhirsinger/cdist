module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        paths: {
            src: {
                concat: 'script/*.js',
                scss: 'scss/style.scss'
            },
            dest: {
                concat: 'js/main.js',
                concatmin: 'js/main.min.js',
                targz: 'js/main.min.js.gz',
                css: 'css/main.css'
            }
        },
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: '<%= paths.src.concat %>',
                dest: '<%= paths.dest.concat %>'
            }
        },
        uglify: {
            files: {
                src: '<%= paths.dest.concat %>',
                dest: '<%= paths.dest.concatmin %>'
            }
        },
        compress: {
            files: {
                src: '<%= paths.dest.concatmin %>',
                dest: '<%= paths.dest.targz %>'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= paths.dest.css %>': '<%= paths.src.scss %>'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['concat', 'uglify', 'compress', 'sass:dist']);
};