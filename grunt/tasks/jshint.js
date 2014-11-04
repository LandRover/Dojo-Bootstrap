module.exports = {
    src: {
        src: [
            '<%= build.src %>/**/*.js',
            'dojo.config.js',
            'dojo.profile.js',
            'specs/**/*Spec.js'
        ],
        
        options: {
            jshintrc: 'grunt/.jshintrc.json'
        }
    },
    
    
    tasks: {
        src: [
            'Gruntfile.js',
            'grunt/**/*.js'
        ],
        
        options: {
            jshintrc: 'grunt/.jshintrc.json'
        }
    }
};