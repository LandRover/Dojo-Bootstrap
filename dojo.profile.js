var profile = (function() {
    "use strict";
    
    var excludeList = {
        "package": 1
    };
    
    return {
        basePath: "./",
        releaseDir: ".build", // build tmp dir
        action: "release",
        layerOptimization: "closure",
        mini: true,
        selectorEngine: "acme",
        
        doboBootText: "require.boot && require.apply(null, require.boot)",
        
        defaultConfig: {
            async: 1,
            hasCache: {
                "config-selectorEngine": "lite",
                "dojo-built": 1,
                "dojo-loader": 1,
                "dom": 1,
                "host-browser": 1
            }
        },
        
        staticHasFeatures: {
            "config-dojo-loader-catches": 0,
            "config-stripStrict": 0,
            "config-tlmSiblingOfDojo": 0,
            "dojo-cdn": 0,
            "dojo-config-api": 0,
            "dojo-loader-eval-hint-url": 1,
            "dojo-log-api": 0,
            "dojo-sniff": 0,
            "dojo-sync-loader": 0,
            "dojo-timeout-api": 0,
            "ie-event-behavior": 0
        },
 
        layers: {
            "dojo/dojo": {
                include: [],
                customBase: true
            },
            "dist/bootstrap": {
                include: [
                    'bootstrap'
                ],
                customBase: true,
                boot: true
            }
        },
        
        resourceTags: {
            amd: function(filename) {
                return (/\.js$/).test(filename);
            },
            
            exclude: function(filename, md) {
                return md in excludeList;
            }
        }
    };
})();