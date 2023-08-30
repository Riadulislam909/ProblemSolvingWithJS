//How would you extract the duplicate numbers in an array

const numberArray = [1,3,2,2,2,5,3,5,6,9,8,7];

let duplicate = numberArray.filter(function(value, index, array){
    return (numberArray.indexOf(value) === index && numberArray.lastIndexOf(value) !== index);
});

console.log(duplicate);