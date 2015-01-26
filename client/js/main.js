(function(){
  'use strict';
  var rate;
  $(document).ready(function(){
    rate  = new $.rateSpace.Rate();

    $('#calculate').click(function(){
      $('#finalHourlyRate').html(rate.finalRate());
    });
    $('#updateRate').click(function(){
      rate.updateBase($('#baseRate').val());
      //rate.updateRate(rate);
    });


  });
})();
