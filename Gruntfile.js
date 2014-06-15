module.exports = function( grunt ) {

  grunt.initConfig({

    watch: {

      files: 'app/*',

      options: {
        livereload: true,
      },

    },

    connect: {

      server: {

        options: {

          base : 'app',
          open : true,
          livereload : true

        },

      },

    },

  });

  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask( 'default' , [

    'connect',
    'watch'

  ]);

};
