(function(){
  'use strict';

  function Rate(){
    this.baseRate = 200;  //default rate from parameters
  }

  Rate.prototype.finalRate = function(num){
    var finalRate = this.baseRate;
    return finalRate;
  };


  $.rateSpace.Rate = Rate;
})();
