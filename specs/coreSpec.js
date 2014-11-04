define([
    'bootstrap/core'
], function (Core) {
    'use strict';
    
    var core;
    
    beforeEach(function() {
        core = new Core();
    });
    
    
    describe('Artist Init', function() {
        it('it can create an Artist', function() {
            core.isRunning = true;
            expect(core.isRunning).toBe(true);
        });
    });
});