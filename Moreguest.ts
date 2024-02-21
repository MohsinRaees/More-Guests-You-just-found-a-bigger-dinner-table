//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let dinnerGuests: string[] = ["Mohsin", "Sameer", "Danial"];

dinnerGuests.unshift("Eve");

let middleIndex: number = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, "Frank");

dinnerGuests.push("Grace");

console.log("Great news! We found a bigger dinner table!");

dinnerGuests.forEach((guest: string) => {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
});