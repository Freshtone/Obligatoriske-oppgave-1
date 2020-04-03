//Teksten må ha lengde 10.Det må være punktum i tredje posisjon og sjette posisjon.År er 0000 eller større. Måned er fra og med 01 til omed 12. Dag er fra og med 01 til og med 28.
function isThisOk(date) {
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var year = date.substring(6, 10);

    return (date.length === 10) && (date[2] == '.' && date[5] == '.') && (year.length === 4 && year >= '0000' && year <= '9999') && (month >= '01' && month <= '12') && (day >= '01' && day <= '28');
}

//29 er lov for februar hvis det er skuddår.
function isFebuaryOk(date) {
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var year = parseInt(date.substring(6, 10));
    if (month == '02' && day == '29' && isLeapYear(year) == true)
        return true;
}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

//30 er lov for alle måneder utenom februar
function isFebuary30OrNot(date) {
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    if (day <= '31' && month == ('01' || '03' || '05' || '07' || '08' || '10' || '12')) return true;
    else if (day <= '30' && month == ('04' || '06' || '09' || '11')) return true;
    else return false;
}

//-----------------------------------Fra Terje--------------------------
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
// fra terje ---------------------------------------------------------








// // //31 er lovlig for januar, mars, mai, juli, august, oktober og desember
// function is31OkForCertainMonths(date) {
//     var day = date.substring(0, 2)
//     var month = date.substring(3, 5);
//     if (day == 31 && month == '01' || '03' || '05' || '07' || '08' || '10' || '12') {
//         return true;

//     }
//     else if (day == 30 && month == '04' || '06' || '09' || '11') { return false; }
//
