//Write a function that can print any random number between any two given numbers (including them).

function getRandomNumber (max, min){
    let num = Math.floor(Math.random() * (max-min+1))+ min;
    console.log(num);
    return 0;
}
getRandomNumber(6,1);