(function(){
  'use strict';

  function Rate(){
    this.baseRate = 200;
    this.finalAmount = 0;
  }

  Rate.prototype.finalRate = function(num){
    var finalRate = this.baseRate;
    return finalRate;
  };

  Rate.prototype.updateBase = function(num){
    this.baseRate = num;
  };

  Rate.prototype.increaseRate = function(num){
    this.finalAmount += parseFloat(num);
    //console.log(this.finalAmount);
  };

  Rate.prototype.decreaseRate = function(num){
    this.finalAmount -= parseFloat(num);
    //console.log(this.finalAmount);
  };

  $.rateSpace.Rate = Rate;
})();
