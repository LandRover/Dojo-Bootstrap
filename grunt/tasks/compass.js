module.exports = {
    dev: {
        options: {
            cssDir: 'css',
            assetCacheBuster: true,
            outputStyle: 'nested'
        }
    },
    
    release: {
        options: {
            cssDir: '<%= build.release %>/css',
            outputStyle: 'compressed',
            environment: 'production'
        }
    },
    
    options: {
        sassDir: 'sass',
        relativeAssets: true,
        force: true
    }
};