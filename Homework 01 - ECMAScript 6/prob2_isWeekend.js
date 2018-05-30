//return string "weekend" or "weekday" without using if-statement
function isWeekend(){
    const todayDate = new Date(); 
    //const todayDate = new Date(2018,4,27); //testing: weekend Sunday 27 May 2018
    //const todayDate = new Date(2018,4,26); //testing: weekend Sat 26 May 2018
    console.log('todayDate: '+todayDate)
    const day = todayDate.getDay(); // 0 - 6 (0 is Sunday)
    console.log('day: '+day)

    const weekdays = ['weekday','weekday','weekday','weekday','weekday'];
    const arrDays = ['weekend', ...weekdays, 'weekend'];
    return arrDays[day];
}

console.log(isWeekend());