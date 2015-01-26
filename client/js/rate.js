(function(){
  'use strict';

  function Rate(){
    this.baseRate = 200;  //default rate from parameters
  }

  Rate.prototype.finalRate = function(num){
    var finalRate = this.baseRate;
    return finalRate;
  };

  Rate.prototype.updateBase = function(num){
    this.baseRate = num;
  };
  $.rateSpace.Rate = Rate;
})();
