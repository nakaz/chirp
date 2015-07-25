var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var fs = require('fs');
var path = require('path');

var chirp = require('../chirp.js');

describe('Chirp', function(){
  it('should be a function', function(){
    expect(chirp).to.be.a('function');
  });

  // it('should chirp once', function(){
  //   expect(chirp).
  // })


});