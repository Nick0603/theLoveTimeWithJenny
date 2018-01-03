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

var FallInLoveDate = new Date(2017,12-1,31);

var loop = () => {
    let today = new Date();
    let FallInLoveDate = window.FallInLoveDate;
    let passMSeconds = today - FallInLoveDate;
    let todayObj = getDateObj(today);
    let passObj = getPassDaysObj(passMSeconds);
    updateView(todayObj,passObj);
}

loop();setInterval(loop,1000);

