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
      $('#rulesTable tr:last').after('<tr><td>'+ $('#ruleText').val()+'</td><td>'+$('#ruleSign option:selected').text() +'</td><td>'+ $('#rule').val() + '</td></tr>');
      if($('#ruleSign option:selected').text() === '\+'){
        rate.increaseRate($('#rule').val());
      }
      if($('#ruleSign option:selected').text() === '\-'){
        rate.decreaseRate($('#rule').val());
      }

    });
  });
})();
