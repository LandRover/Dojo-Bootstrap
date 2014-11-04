/**
 * Core object
 * @name Core
 * @constructor Core
 */
define([
    'dcl',
    'dcl/advise',
    'dcl/bases/Mixer',
    'lodash'
],
function(dcl, advise, Mixer, _) {
    'use strict';
    
    return dcl(Mixer, {
        isRunning: false,
        
        constructor: function() {
            console.log('hit');
            console.log(_);
            this.start();
        },
        
        start: function() {
            this.isRunning = true;
            
            return this;
        }
    });
});
