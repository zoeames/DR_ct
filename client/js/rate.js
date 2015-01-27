(function(){
  'use strict';

  function Rate(){                              //constructor
    this.baseRate = 200;
    this.finalAmount = 200;
  }

  Rate.prototype.finalRate = function(){        //finalRate instance method
    this.finalAmount = this.baseRate;           //sets initial final rate to baseRate before rules applied
  };

  Rate.prototype.updateBase = function(num){    //updateBase instance method
    this.baseRate = parseInt(num);              //converts form input baseRate to integer
    this.finalAmount= this.baseRate;            //sets initial final rate to baseRate before rules applied
  };

  Rate.prototype.increaseRate = function(num){  //increaseRate instance method
    this.finalAmount += parseFloat(num);        //checks that increase amount is a floating point and then adds to final amount
  };

  Rate.prototype.decreaseRate = function(num){  //decreaseRate instance method
    this.finalAmount -= parseFloat(num);        //checks that decrease amount is a floating point and then subtracts from final amount
    if(this.finalAmount <0){                    //checks if finalAmount is negative
      this.finalAmount = 0;                     //if negative assigns finalAmount=0
    }
  };

  $.rateSpace.Rate = Rate;
})();
