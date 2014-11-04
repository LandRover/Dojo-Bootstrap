module.exports = {
    // run tests
    test: {
        options: {
            specs: [
                'specs/**/*Spec.js'
            ]
        }
    },
    
    options: {
        src: 'src/**/*.js',
        host: 'http://127.0.0.1:1337/',
        helpers: [
            'dojo.config.js',
            'vendors/dojo/dojo.js',
            'jam/sinon/sinon.js'
            //'specs/helpers/*Helper.js',
        ],
        template: 'specs/helpers/_SpecRunner.tmpl'
    }
};