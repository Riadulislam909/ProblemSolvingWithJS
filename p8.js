//write a code which can find how many times the word repeate and first index of this word 

let sentence =
    "learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. if you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no-stack to a full-stack developer. Lear with Sumit also deep dives onto advanced topics using the latest best practices for you seasoned web developer.";

    const matches = sentence.match(/sumit/ig);
    matches ? console.log("Total matches: "+ matches.length) : console.log("Total match: 0");

    let indexNumber = sentence.search(/sumit/i);
    indexNumber >= 0 ? console.log("1st index is: "+indexNumber) : console.log("Not found!");