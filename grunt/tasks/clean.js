module.exports = {
    // clean after build
    after_build: {
        src: [
            '.sass-cache',
            '.grunt',
            '.build'
        ]
    },
    
    release: {
        src: [
            '.sass-cache',
            '.grunt',
            '.build',
            'dist'
        ]
    },
    
    // deletes everything generated
    all_generated: {
        src: [
            '.sass-cache', // clean up sass cache
            '.grunt', // grunt tmp
            '.build', // build tmp
            'css', // clean generated css
            'dist' // build dist
        ]
    }
};