module.exports = function(grunt) {


    grunt.initConfig({
        less: {
            style: {
                files: {
                    'assets/style/main.css': 'assets/less/main.less'
                }
            }
        },
        watch: {
            css: {
                files: ['assets/less/*.less'],
                tasks: ['less:style'],
                option: {
                    livereload: true
                }
            }
        },
        web_server: {
            options: {
                cors: true,
                port: 8000,
                nevercache: true,
                logRequests: false
            },
            foo: 'bar' // For some reason an extra key with a non-object value is necessary
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-web-server');

    grunt.registerTask('default', ['watch']);
};