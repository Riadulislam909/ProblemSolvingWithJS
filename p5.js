const vowels = ["a","e","i","o","u","A","E","I","O","U"];

function countVowels(sentence){
    let count = 0;
    const sentenceArray = Array.from(sentence);
    sentenceArray.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    console.log("Vowels number in this sentence is: "+count);

}

countVowels("I live in Chittagong.");
countVowels("Life is beautyful.");
countVowels("ABC");
