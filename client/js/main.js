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
      var amount = $('#ruleSign option:selected').text() + $('#rule').val(),
          htmlString = '<tr><td>'+ $('#ruleText').val()+'</td><td>'+ $('#ruleSign option:selected').text() +'</td><td>'+ $('#rule').val() + '</td><td> <button class="applyButton" name="subject" type="submit" value='+ amount +'>Apply</button></td></tr>';
      //console.log(ammount);
      $('#rulesTable tr:last').after(htmlString);

      if($('#ruleSign option:selected').text() === '\+'){
        rate.increaseRate($('#rule').val());
      }
      if($('#ruleSign option:selected').text() === '\-'){
        rate.decreaseRate($('#rule').val());
      }

    $('.applyButton').click(function(){
      var amount = parseInt(this.value);
      console.log(amount);
    });

    });
  });
})();
