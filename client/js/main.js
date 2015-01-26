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
    });

    $('#createRule').click(function(){
      $('#rulesContainer').append('<p>'+ $('#ruleText').val() + ' at $'+$('#ruleSign option:selected').text() +$('#rule').val() + ' /hour' +'</p>');
      if($('#ruleSign option:selected').text() === '\+'){
        rate.increaseRate($('#rule').val());
      }
      if($('#ruleSign option:selected').text() === '\-'){
        rate.decreaseRate($('#rule').val());
      }

    });
  });
})();
