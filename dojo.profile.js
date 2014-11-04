var profile = (function(){

  'use strict';

  var miniExcludes = {
    'package': 1
  };

  return {
    basePath: "./",
    releaseDir: ".build",
    action: "release",
    layerOptimize: "closure",
    optimize: "closure",
    cssOptimize: "comments", 
    mini: true,
    selectorEngine: "acme",
    stripConsole: "all",
    useSourceMaps: false, // sourceMap file option

    dojoBootText: "(function(){ require({cache:{}}); require.boot && require.apply(null, require.boot); })();",

    defaultConfig: {
      async: true,
      hasCache:{
        "dojo-built": true,
        "dojo-loader": true,
        "dom": true,
        "host-browser": true,
        "config-selectorEngine": "acme"
      }
    },

    staticHasFeatures: {
      "config-deferredInstrumentation": false,
      "config-dojo-loader-catches": false,
      "config-tlmSiblingOfDojo": false,
      "csp-restrictions": true,
      "dojo-amd-factory-scan": false,
      "dojo-cdn": false,
      "dojo-combo-api": false,
      "dojo-config-api": true,
      "dojo-config-require": false,
      "dojo-debug-messages": false,
      "dojo-dom-ready-api": true,
      "dojo-firebug": false,
      "dojo-guarantee-console": false,
      "dojo-has-api": true,
      "dojo-inject-api": true,
      "dojo-loader": true,
      "dojo-log-api": false,
      "dojo-modulePaths": false,
      "dojo-moduleUrl": false,
      "dojo-publish-privates": false,
      "dojo-requirejs-api": false,
      "dojo-sniff": false,
      "dojo-sync-loader": false,
      "dojo-test-sniff": false,
      "dojo-timeout-api": false,
      "dojo-trace-api": false,
      "dojo-undef-api": false,
      "dojo-v1x-i18n-Api": true,
      "dom-addeventlistener": true,
      "dom": true,
      "extend-dojo": true,
      "host-browser": true
    },

    layers: {
      "dojo/dojo": {
        include: [],
        customBase: true
      },
      "release/bootstrap": {
        include: [
          "bootstrap"
        ],
        customBase: true,
        boot: true
      }
    },

    resourceTags: {
      miniExclude: function(filename, mid){
        return mid in miniExcludes;
      },
      amd: function(filename, mid) {
        return (/\.js$/).test(filename);
      }
    }
  };
})();