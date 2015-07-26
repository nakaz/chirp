var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var chirp = require('../chirp.js');

describe('Chirp', function(){
  it('should be a function', function(){
    expect(chirp).to.be.a('function');
  });

  it('should chirp once', function(){
    expect(chirp(1)).to.equal('chirp');
  });

  it('should chirp x amount of times', function (){
    expect(chirp(3)).to.equal('chirp chirp chirp');
    expect(chirp(5)).to.equal('chirp chirp chirp chirp chirp');
  });


});