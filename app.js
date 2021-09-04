//variable

let timeMeridiem = "AM";

function clock(){
    const currentTime = new Date;
    let timeMinutes = currentTime.getMinutes();
    if(timeMinutes<10){
        timeMinutes=`0${timeMinutes}`
        document.getElementById("minutes").innerHTML=timeMinutes;
        }
    document.getElementById("minutes").innerHTML=timeMinutes;
    let timeMeridiem = "AM";
    let timeHour = currentTime.getHours();
    if(timeHour>12){
        timeHour = timeHour-12
        timeMeridiem = "PM"
        if(timeHour<10){
            timeHour=`0${timeHour}`
            document.getElementById("minutes").innerHTML=timeHour;
        }
        document.getElementById("meridiem").innerHTML=timeMeridiem;
    }
    if(currentTime.getHours()<10){
        timeHour=`0${timeHour}`
        document.getElementById("minutes").innerHTML=timeHour;
    }
    document.getElementById("hour").innerHTML=timeHour;
    document.getElementById("meridiem").innerHTML=timeMeridiem;
    let timeSecond = currentTime.getSeconds();
    if(timeSecond<10){
        timeSecond=`0${timeSecond}`
        document.getElementById("seconds").innerHTML=timeSecond;
    }
    document.getElementById("seconds").innerHTML=timeSecond;
}
setInterval(clock, 1000);
