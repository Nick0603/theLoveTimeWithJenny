let getDateObj = (date)=>{
    var DateObj = {
        year:   date.getFullYear(),
        month: (date.getMonth()+1),
        date:   date.getDate(),
        hours:   date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
    for( var key in DateObj ){
        if(DateObj[key] < 10)DateObj[key] = "0" + DateObj[key];
    }
    return DateObj;
}

let getPassDaysObj = (times)=>{
    var oneYearTime = 365 * 24 * 60 * 60 * 1000;
    var oneDayTime =        24 * 60 * 60 * 1000;

    var passYears = Math.floor(times/oneYearTime);
    var passDays =  Math.floor(times % oneYearTime / oneDayTime);

    var DateObj = {
        passYears:  passYears,
        passDays: passDays
    }
    for( var key in DateObj ){
        if(DateObj[key] < 10)DateObj[key] = "0" + DateObj[key];
    }
    return DateObj;
}

let updateView = (todayObj,passObj) => {
    $('#year').text(todayObj.year);
    $('#month').text(todayObj.month);
    $('#date').text(todayObj.date);
    $('#hours').text(todayObj.hours);
    $('#minutes').text(todayObj.minutes);
    $('#seconds').text(todayObj.seconds);

    $('#passYears').text(passObj.passYears);
    $('#passDays').text(passObj.passDays);
}

let fillInLoveDate = (FallInLove) => {
    $('.fallInLove_year').text(FallInLove[0]);
    $('.fallInLove_month').text(FallInLove[1]);
    $('.fallInLove_date').text(FallInLove[2]);
}

var FallInLove = "2017/12/31";
var EndLove = "2020/06/27 23:59:59";
var FallInLove = FallInLove.split("/").map((str)=>Number(str));
var init = () => {
    let FallInLove = window.FallInLove;
    fillInLoveDate(FallInLove);
}
var loop = () => {
    let FallInLoveDate = new Date(FallInLove);
    let EndLoveDate = new Date(EndLove);
    let passMSeconds = EndLoveDate - FallInLoveDate;
    let todayObj = getDateObj(EndLoveDate);
    let passObj = getPassDaysObj(passMSeconds);
    updateView(todayObj,passObj);
}

init();
loop();setInterval(loop,1000);

