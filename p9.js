//input: linearSearch(['a','b','c','d','e'],'d')
//output: 3 or 'not found'

function linearSearch(arr, val){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return "Not found.";
}
console.log(linearSearch(['a','b','c','d','e'],'n'));