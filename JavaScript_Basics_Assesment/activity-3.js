const namesList = ['bob','sam','smith']
const name1 = prompt('enter a name');
const name2 = prompt('enter a name');
const name3 = prompt('enter a name');
namesList.push(name1);
namesList.push(name2);
namesList.push(name3);
console.log(namesList)
for (let i = 0; i < 3; i++){
    console.log(i);
}