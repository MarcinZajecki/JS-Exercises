console.log('hallo');
const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
// console.log(names.length);
// console.log(names.slice(0, 1));


const newNames = [];
for (const singlNameId in names) {
    // console.log(names[singlNameId]);
    const singlNameLastLetter = names[singlNameId].charAt((names[singlNameId].length - 1));
    console.log(singlNameLastLetter, 'singlNameLastLetter');
    if (singlNameLastLetter === "a") {
        console.log(names[singlNameId]);
        newNames.push(names[singlNameId]);
    }
};
console.log('Wynik zadania to:');
console.log(newNames);