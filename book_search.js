/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */


    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    
    // iterate through book object/objects
    for (let i = 0; i < scannedTextObj.length; i++)
    {
        // content in book object
        const current_content = scannedTextObj[i].Content;
        console.log("current_content[i]", scannedTextObj);
        // iterate through books content 
        for(let j = 0; j < current_content.length; j++)
        {
            // text section of content
            const text = current_content[j].Text;
            // if search term is found in current content text
            if(text.includes(searchTerm))
            {
                // add values to result object
                result.Results.push({
                    "ISBN": scannedTextObj[i].ISBN,
                    "Page": current_content[j].Page,
                    "Line": current_content[j].Line
                });
               
            }
        }
    }
    return result;
   
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

// multiple book test object. Contains multiple book entries 
const thirtyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "Thirty Leagues on the Moon",
        "ISBN": "07904927777",
        "Content": [
            {
                "Page": 71,
                "Line": 5,
                "Text": "walked across the moons surface, "
            },
            {
                "Page": 71,
                "Line": 6,
                "Text": "a profound darkness began to envelop"
            },
            {
                "Page": 71,
                "Line": 7,
                "Text": "eyes were, I asked myself how he had managed to the see, and"
            } 
        ] 
    }
]


    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}
// test object, checks if result for test 3 matches "The"
const test3res = {
    "SearchTerm": "The",
    "Results": [
        {
                "ISBN": "9780000528531",
                "Page": 31,
                "Line": 8,       
        }         
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}


/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("and", twentyLeaguesIn); 
if (test2result.Results.length == 2) {
    console.log("PASS: Test 2");
    console.log("View: ", test2result);

} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// checks for capitalization : "The"
const test3 = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(test3res) === JSON.stringify(test3)) {
    console.log("PASS: Test 3");
    console.log("Expected:", test3);
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", test3);
    console.log("Received:", test3res);
}

// check for non-existant match
const test4 = findSearchTermInBooks("cat", twentyLeaguesIn); 
if (test4.Results.length == 0) {
    console.log("PASS: Test 4");
    console.log("View: ", test4);

} else {
    console.log("FAIL: Test 4");
    console.log("Expected: 0");
    console.log("Received:", test4.Results.length);
}

// multiple book test
const test5 = findSearchTermInBooks("the",thirtyLeaguesIn); 
if (test5.Results.length == 3) {
    console.log("PASS: Test 5");
    console.log("View: ", test5);

}

// multiple book test no match

const test6 = findSearchTermInBooks("cat",thirtyLeaguesIn); 
if (test6.Results.length == 0) {
    console.log("PASS: Test 6");
    console.log("View: ", test5);

} else {
    console.log("Fail : test 6");
}