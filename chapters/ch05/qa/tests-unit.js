/**
 * Created by david on 31/10/16.
 */

var fortune = require('../lib/fortune.js'); var expect = require('chai').expect;
suite('Fortune cookie tests', function(){
    test('getFortune() should return a fortune', function(){
        expect(typeof fortune.getFortune() === 'string');
    });
});