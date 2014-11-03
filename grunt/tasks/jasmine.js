module.exports = {
    // run tests
    run: {
        src: [
            '<%= build.src %>/**/*.js'
        ],
        options: {
            host: 'http://127.0.0.1:1337/',
            specs: [
                'specs/**/*.js'
            ],
            helpers: [
                'specs/helpers/*Helper.js',
                'vendors/sinon/sinon.js'
            ],
            template: 'specs/helpers/_SpecRunner.tmpl'
        }
    }
};