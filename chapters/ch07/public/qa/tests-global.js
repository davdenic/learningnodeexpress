/**
 * Created by david on 31/10/16.
 */

"use strict";
var assert = require('chai').assert;

suite('Global Tests', function(){
    test('page has a valid title', function(){
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});