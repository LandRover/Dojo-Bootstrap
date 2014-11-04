define([
    'bootstrap/core'
], function (Core) {
    'use strict';
    
    var core;
    
    beforeEach(function() {
        core = new Core();
    });
    
    
    describe('Core Init', function() {
        it('it can create a Core', function() {
            core.isRunning = true;
            expect(core.isRunning).toBe(true);
        });
    });
});