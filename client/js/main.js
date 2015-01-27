(function(){
  'use strict';
  var rate;
  $(document).ready(function(){
    rate  = new $.rateSpace.Rate();                               //create new namespace called rate

    rate.finalRate();                                             //set initial final rate to set base rate = 200
    $('#finalHourlyRate').html(rate.baseRate);                    //display initial final amount


    $('#updateRate').click(function(){                            //update base rate
      rate.updateBase($('#baseRate').val());                      //calls Rate.updateBase function and sends in info from field
      $('#finalHourlyRate').html(rate.finalAmount);               //updates final amount with new base rate
    });

    $('#createRule').click(function(){                            //create rule function
                                                                  //amount = sign plus number
                                                                  //htmlString =  string concatination to create html table row
      var amount = $('#ruleSign option:selected').text() + $('#rule').val(),
          htmlString = '<tr><td>'+ $('#ruleText').val()+'</td><td>'+ $('#ruleSign option:selected').text() +'</td><td>'+ $('#rule').val() + '</td><td> <button class="applyButton btn yellow" type="submit" value='+ amount +'>Apply</button></td></tr>';
      $('#rulesTable tr:last').after(htmlString);                 //pushes new row into bottom of table
    });

    $('#rulesTable').on('click', '.applyButton', function(){      //function that handles clicking of apply button in rules table
      var amount = parseFloat($(this).val());                     //takes value from button (ie that was in form) and converts to floating point num
      if(amount<0){                                               //deals with negative numbers
        rate.decreaseRate(amount*-1);                             //removes negative sign, calls decreaseRate function
        $(this).parent().remove();                                //removes button so can't apply rule more than once
        $('#finalHourlyRate').html(rate.finalAmount);             //updates final amount value
      }else{                                                      //deals with positive numbers
        rate.increaseRate(amount);                                //calls increaseRate function
        $(this).parent().remove();                                //removes button so can't apply rule more than once
        $('#finalHourlyRate').html(rate.finalAmount);             //updates final amount value
      }
    });
  });
})();
