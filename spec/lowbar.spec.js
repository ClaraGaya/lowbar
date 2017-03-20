/* global describe, it */
var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));
var sinon = require('sinon');

describe('_', function () {
  'use strict';
  it('is an object', function () {
    expect(_).to.be.an('object');
  });
});

describe('_.each', function () {
  'use strict';
  it('is a function', function() {
    expect(_.each).to.be.a('function');
  });
  it('should have two arguments', function(){
    expect(_.each()).to.be.false;
    expect(_.each([1,2,3])).to.be.false;
   });
   it('expects a list as a first argument', function(){
     expect(_.each('abc')).to.be.false;
     expect(_.each(714)).to.be.false;
   });
   it('expects a function as a second argument', function(){
     expect(_.each([1,2,3],3)).to.be.false;
     expect(_.each([1,2,3],['hello'])).to.be.false;
   });
   it('iterates over the list, and runs a function on each element', function(){
     var list = [1,2,3];
     var spy = sinon.spy();
     _.each(list,spy);
     expect(spy.callCount).to.equal(list.length);
   });
});

describe('_.map', function () {
  'use strict';
  it('is a function', function() {
    expect(_.map).to.be.a('function');
  });
  it('should have two arguments', function(){
    expect(_.map()).to.be.false;
    expect(_.map([1,2,3])).to.be.false;
  });
  it('expects a list as a first argument', function(){
    expect(_.map('abc')).to.be.false;
    expect(_.map(714)).to.be.false;
  });
  it('expects a function as a second argument', function(){
    expect(_.map([1,2,3],3)).to.be.false;
    expect(_.map([1,2,3],['hello'])).to.be.false;
  });
  it('iterates over the list, and runs a function on each element', function(){
    var list = [1,2,3];
    var spy = sinon.spy();
    _.map(list,spy);
    expect(spy.callCount).to.equal(list.length);
   });
   it('returns a new list', function(){
    var list = [1,2,3];
    var func = function(e){return e * 2};
    expect(_.map(list,func)).to.not.equal(list);
    expect(_.map(list,func)).to.not.eql(list);
  });
  it('iterates over the list, and runs a function on each element', function(){
    var list = [1,2,3];
    var func = function(e){return e * 2};
    expect(_.map(list,func)).to.eql([2,4,6]);
  });
});


describe('_.reduce', function () {
  'use strict';
  it('is a function', function() {
    expect(_.reduce).to.be.a('function');
  });
  it('should have at least two arguments', function(){
    expect(_.reduce()).to.be.false;
    expect(_.reduce([1,2,3])).to.be.false;
  });
  it('expects an array as a first argument', function(){
    expect(_.reduce('abc')).to.be.false;
    expect(_.reduce(714)).to.be.false;
    expect(_.reduce({'name': 'Steve'})).to.be.false;
  });
  it('expects a function as a second argument', function(){
    expect(_.reduce([1,2,3],3)).to.be.false;
    expect(_.reduce([1,2,3],['hello'])).to.be.false;
  });
   it('returns a new array', function(){
    var list = [1,2,3];
    var func = function(e){return e * 2};
    expect(_.reduce(list,func)).to.not.equal(list);
    expect(_.reduce(list,func)).to.not.eql(list);
  });
});

describe('_.filter', function () {
  'use strict';
  it('is a function', function() {
    expect(_.filter).to.be.a('function');
  });
  it('should have two arguments', function(){
    expect(_.filter()).to.be.false;
    expect(_.filter([1,2,3])).to.be.false;
  });
  it('expects a list as a first argument', function(){
    expect(_.filter('abc')).to.be.false;
    expect(_.filter(714)).to.be.false;
  });
  it('expects a function as a second argument', function(){
    expect(_.filter([1,2,3],3)).to.be.false;
    expect(_.filter([1,2,3],['hello'])).to.be.false;
  });
   it('returns a new list', function(){
    var list = [1,2,3];
    var func = function(e){return e * 2};
    expect(_.filter(list,func)).to.not.equal(list);
    expect(_.filter(list,func)).to.not.eql(list);
  });
  it('Looks through each value in the list, returning an array of all the values that pass a truth test', function(){
    var list = [1,2,3];
    var func = function(e){return e > 1};
    expect(_.filter(list,func)).to.eql([2,3]);
  });
});