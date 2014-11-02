define([
    'dcl',
    'dcl/advise',
    'dcl/bases/Mixer',
    'lodash'
],
function(dcl, advise, Mixer, _) {
    'use strict';
    
    return dcl(Mixer, {
        constructor: function() {
            console.log('hit');
            console.log(_);
        }
    });
});