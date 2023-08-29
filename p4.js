//Write a function that can tell us whether an year is a leap year or not

function isLeapYear (year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(year +" is a Leap year.")
    }
    else{
        console.log(year +" isn't a Leap year.")
    }
}

isLeapYear(2000);
isLeapYear(1996);
isLeapYear(2023);