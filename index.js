 for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger; 
} 
const gifts = ["teddy bear", "drone", "doll"];

/* function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
} */

function writeCards(names, event) {
    const thankYouMessages = [];

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
     thankYouMessages.push(message);   
    }
    return thankYouMessages;
}

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

wrapGifts(gifts);

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
countDown(10);