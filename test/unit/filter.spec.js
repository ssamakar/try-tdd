var should = require('should')
var filter = require('../../app/filter')

describe('filter', function(){

  it('exists', function (){
    should.exist(filter)
  })

  it('is a function', function(){
  	(typeof filter).should.eql('function');
  })

  it('returns an array', function(){
  	var actual = filter();
  	(Array.isArray(actual)).should.be.true;
  })

  it('takes a list and a condition', function(){
  	filter.length.should.eql(2);
  })

  // other tests here...

  it('returns an empty array when given an empty array', function(){
  	var actual = filter([], function () {});
  	actual.should.eql([]);
  })

  it('returns elements that pass the condition', function(){
  	var actual = filter([1,2], function(i){
  		return i%2 === 0
  	})
  })

})