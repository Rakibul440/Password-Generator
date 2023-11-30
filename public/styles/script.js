let word = prompt("What's your name : ");
let midWord = word.slice(0,4);

console.log(midWord);

let wordArry = [
    '$hi9',
    '_$wrong69',
    '@right404',
    '_!bye8',
    '$69bhi',
    '#wrong',
    '_$007',
    '#alex',
    'space@',
    '#java',
    '$col'

];
let number = Math.floor(Math.random()*10);
let ranWord = wordArry[number];
let SemiPass = ranWord.concat(midWord);
let password = SemiPass.concat("@Bul");
console.log(password);