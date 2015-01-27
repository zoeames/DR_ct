(function(){
  'use strict';
  var rate;
  $(document).ready(function(){
    rate  = new $.rateSpace.Rate();

    $('#finalHourlyRate').html(rate.baseRate);


    $('#updateRate').click(function(){
      rate.updateBase($('#baseRate').val());
      $('#finalHourlyRate').html(rate.finalRate());
    });

    $('#createRule').click(function(){
      var amount = $('#ruleSign option:selected').text() + $('#rule').val(),
          htmlString = '<tr><td>'+ $('#ruleText').val()+'</td><td>'+ $('#ruleSign option:selected').text() +'</td><td>'+ $('#rule').val() + '</td><td> <button class="applyButton" type="submit" value='+ amount +'>Apply</button></td></tr>';
      //console.log(ammount);
      $('#rulesTable tr:last').after(htmlString);
      /*
      if($('#ruleSign option:selected').text() === '\+'){
        rate.increaseRate($('#rule').val());
      }
      if($('#ruleSign option:selected').text() === '\-'){
        rate.decreaseRate($('#rule').val());
      }*/
    });

    $('#rulesTable').on('click', '.applyButton', function(){
      alert('buton clicked!');
      //var amount = parseInt($(this).val());
      console.log(this);
      //return amount;
    });


  });
})();
