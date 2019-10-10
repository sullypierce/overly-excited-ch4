// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
 addExcitement= (theWordArray, char, num) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""


    for (let i = 0; i < theWordArray.length; i++) {
        //check whether and add char num times
        for (j = 0; j < num; j++) {
            if ((i + 1) % 3 === 0) {
                theWordArray[i] += char;
            };
        }

        // Concatenate the new word onto buildMeUp
        buildMeUp += (theWordArray[i] + " ");
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "?", 7);