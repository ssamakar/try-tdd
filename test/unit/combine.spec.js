var should = require('should')
var combine = require('../../app/combine')

describe('combine', function () {

  it('exists', function () {
    should.exist(combine)
  })

  it('fails when given an object', function(){
  	var obj = {};
  	var actual = combine(obj);
  	actual.should.be.false;
  })

  it('fails when given a string', function(){
  	var string = "";
  	var actual = combine(string);
  	actual.should.be.false;
  })

  it('fails when given a number', function(){
  	var number = 5;
  	var actual = combine(number);
  	actual.should.be.false;
  })

  it('returns false when given an empty array', function(){
  	var arr = []
  	var actual = combine(arr);
  	actual.should.be.false;
  })

  it('returns an object if given an array', function(){
  	var arr = [{}, {}]
  	var actual = combine(arr);
  	(typeof actual).should.eql('object');
  })

  it("fails if array contains anything but objects", function(){
  	var arr = [5, "string", [], {}, true];
  	var actual = combine(arr);
  	actual.should.be.false;
  })

  // it("if an array contains one object, it's mapped to a new object", function(){
  // 	arr = [{}]
  // })

})