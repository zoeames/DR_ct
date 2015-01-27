(function(){
  'use strict';

  function Rate(){
    this.baseRate = 200;
    this.finalAmount = 0;
  }

  Rate.prototype.finalRate = function(){
    var finalRate = this.baseRate;
    this.finalAmount += finalRate;
    console.log('this.finalamount', typeof this.finalAmount, this.finalAmount);
    return finalRate;
  };

  Rate.prototype.updateBase = function(num){
    this.baseRate = parseInt(num);
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
