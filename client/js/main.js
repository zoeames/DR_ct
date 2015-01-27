(function(){
  'use strict';
  var rate;
  $(document).ready(function(){
    rate  = new $.rateSpace.Rate();

    rate.finalRate();
    $('#finalHourlyRate').html(rate.baseRate);


    $('#updateRate').click(function(){
      rate.updateBase($('#baseRate').val());
      $('#finalHourlyRate').html(rate.finalAmount);
    });

    $('#createRule').click(function(){
      var amount = $('#ruleSign option:selected').text() + $('#rule').val(),
          htmlString = '<tr><td>'+ $('#ruleText').val()+'</td><td>'+ $('#ruleSign option:selected').text() +'</td><td>'+ $('#rule').val() + '</td><td> <button class="applyButton btn yellow" type="submit" value='+ amount +'>Apply</button></td></tr>';
      //console.log(ammount);
      $('#rulesTable tr:last').after(htmlString);
    });

    $('#rulesTable').on('click', '.applyButton', function(){
      var amount = parseInt($(this).val());
      console.log(amount);
      if(amount<0){
        rate.decreaseRate(amount*-1);              //removes negative sign
        console.log('negative Number');
        $(this).parent().remove();                //removes button so can't apply rule more than once
        $('#finalHourlyRate').html(rate.finalAmount);

      }else{
        rate.increaseRate(amount);
        console.log('positive number');
        $(this).parent().remove();             //removes button so can't apply rule more than once
        $('#finalHourlyRate').html(rate.finalAmount);
      }
      //return amount;
    });


  });
})();
