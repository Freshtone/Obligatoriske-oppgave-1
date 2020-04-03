
//When using this way of running functions it checks that all is acceptable before going and defining if the result is true or false. 

function isThisOk(date) {
    return isDateLengthOk(date)
        && isDotInThirdAndSeventhPlace(date)
        && isYearAbove0000(date)
        && isMonthBetween01And12(date)
        && isDayBetween01And28(date)
}


//run this function bellow with multiple functions attatched as above...
//make variables instead of writing code directly in function.

function isDayOk(date) {
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var isFebruary = month == '02';
    var isShortMonth = month == '04' || month ==  '06' || month ==  '09' || month ==  '11';
    return day >= '01' && day <= '28'
      || day == '29' && (!isFebruary|| isLeapYear)
      || day == '30' && (!isFebruary)
      || day == '31' && !isFebruary && !isShortMonth;
}