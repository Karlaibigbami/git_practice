// create a random number with the following function

const createRandomNumber = num =>{
    return Math.floor(Math.random() * num);
}

// stored messages that will be used for random popups

const messageInfo = {
    verb: ['bounce', 'sing', 'dance', 'clean','eat', 'lick'],
    noun: ['baseball cap', 'roses', 'coffee mug','looking glass','robot','tiger'],
    ingVerb: ['farting', 'drinking', 'messing', 'dumping', 'gargling', 'hugging'],
    number: [ '10', '58','60','8,967','345','78'],
    secondNound: ['foot', 'monster', 'bed','apple','trousers', 'donkey']
}

// place where the final message will be stored

const crazyMessage = [];

// loop to create random message

for (let word in messageInfo){
    let randomIndex = createRandomNumber(messageInfo[word].length);

    // Intakes the properties from the object to create a message and add it to the crazyMessage Array
    switch(word){
        case 'verb':
            crazyMessage.push(`They say that to properly ${messageInfo[word][randomIndex]} a`);
            break;
        case 'noun':
            crazyMessage.push(`${messageInfo[word][randomIndex]} you must first `);
            break;
        case 'ingVerb':
            crazyMessage.push(`begin by ${messageInfo[word][randomIndex]} it. `);
            break;
        case 'number':
            crazyMessage.push(`Well, I must say that I tried this ${messageInfo[word][randomIndex]} time(s). `);
            break;
        case 'secondNoun':
            crazyMessage.push(`All I got was a ${messageInfo[word][randomIndex]}.`);
            break;
           }
}
// format the crazyMessage
const formatCrazyMessage = message =>{
    const compile = crazyMessage.join(' ');
    console.log(compile);
}
// print the actual crazy message
formatCrazyMessage(crazyMessage);