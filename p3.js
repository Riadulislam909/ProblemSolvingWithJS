//How can you order roll numbers of students in your class sequentially

const rollNumber = [8,7,5,4,3,9,2,1,15];

let sorted = rollNumber.sort(function(a,b){
    return a-b;
});
console.log(sorted);