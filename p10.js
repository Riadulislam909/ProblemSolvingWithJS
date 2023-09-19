//find the largest string in array and it's index number

function largestElements(arr){
    let longestName = "";
    for(let name of arr){
        if(name.length > longestName.length){
            longestName = name;
        }
    }
    return [longestName, arr.indexOf(longestName)];
}
console.log(largestElements(["Riad","Afridi","Abid Tawsif","Jisan Mostafa", "Iftaker Emu"]))