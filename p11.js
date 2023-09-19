// find numbers from 1-100 which is divided by 3,5

function threeFive(num){
    for(let i = 1; i <= num; i++){
        if( i % 15 === 0){
            console.log(`${i} is divided by 3 and 5 also.`);
        }
        else if(i % 3 === 0){
            console.log(`${i} is divided by 3.`)
        }
        else if(i % 5 === 0){
            console.log(`${i} is divided by 5.`);
        }
    }

};
threeFive(100);