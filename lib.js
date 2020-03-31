function isThisOk(date) {
    return isDateLengthOk(date)
    && isDotInThirdAndSeventhPlace(date)
    && isYearAbove0000(date)
    && isMonthBetween01And12(date)
    && isDayBetween01And28(date)
}

//Teksten må ha lengde 10.
function isDateLengthOk(date)   {
    return date.length === 10;
}
//Det må være punktum i tredje posisjon og i sjette posisjon.
function isDotInThirdAndSeventhPlace(date)  {
    return date[2] == '.' && date[5] == '.'; 
}
//År er 0000 eller større. Kan sjekkes med year.length === 4 && year >= '0000' && year <= '9999'
function isYearAbove0000(date)  {
    var year = date.substring(6,10);
    return year.length === 4 && year >= '0000' && year <= '9999';
}
//Måned er fra og med 01 til og med 12. Kan sjekkes som over.
function isMonthBetween01And12(date)    {
    var month = date.substring(3,5);
    return month >= '01' && month <= '12'; 
}
//Dag er fra og med 01 til og med 28
function isDayBetween01And28(date)    {
    var day = date.substring(0,2);
    //if day == '29' return true;
    return day >= '01' && day <= '28';
     
}