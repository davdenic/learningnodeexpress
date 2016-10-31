/**
 * Created by david on 31/10/16.
 */

module.exports = function(grunt){ // load plugins
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach(function(task){
        grunt.loadNpmTasks(task);
    });
// configure plugins
    grunt.initConfig({
        cafemocha: {
            all: {
                src: 'qa/tests-*.js', options: { ui: 'tdd' },
            }
        },
        jshint: {
            app: ['app.js', 'public/js/**/*.js', 'lib/**/*.js'],
            qa: ['gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
        },
        exec: {
            linkchecker: {cmd: 'linkchecker http://localhost:3000'},
        },
    });
// register tasks
    grunt.registerTask('default', ['cafemocha','jshint','exec']);
};