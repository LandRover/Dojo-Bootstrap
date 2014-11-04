module.exports = {
    // clean after build
    after_build: {
        src: [
            '.sass-cache',
            '.grunt'
        ]
    },
    
    // delete only
    release: {
        src: [
            '.sass-cache',
            '.grunt',
            '.build'
        ]
    },
    
    // deletes everything generated
    all: {
        src: [
            '.sass-cache', // clean up sass cache
            '.grunt', // grunt tmp
            '.build', // build tmp
            'css', // clean generated css
            'dist' // build dist
        ]
    }
};