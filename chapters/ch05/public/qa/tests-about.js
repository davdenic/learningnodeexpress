/**
 * Created by david on 31/10/16.
 */

"use strict";
var assert = require('chai').assert;

suite('"About" Page tests',function(){
    test('link to contact',function () {
        assert($("a[href='/contact']").length);
    });
});
