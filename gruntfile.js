module.exports = function(grunt) {
 
// Project configuration
grunt.initConfig({

    // load metadata specified in package.json, such as version
    "pkg": grunt.file.readJSON('package.json'),
 
    // clean
    "clean": {
      all: [
        "app/css",
        "tests/reports"
]
},
    // convert .less to .css
 
    "less": {
      all: {
        files: [{
          expand: true,
          cwd: "app/less",
          src: ["**/*.less"],
          dest: "app/css",
          ext: ".css"
        }]
}
},
    karma: {
    	 options: {
    	 	 configFile: 'tests/karma.conf.js',
 
        browsers: ['PhantomJS'],
    	 	 singleRun: true,
    	 	 logLevel: 'INFO'
    	 }
}
},
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          env: {
            PORT: '8000'
          }
        }
}
}
 
});
 
// Load plugins
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('grunt-karma');
 
// Default task
grunt.registerTask('default', ['less']);
grunt.registerTask('run', ['nodemon']);
grunt.registerTask('test', ['karma']);
};