function changecolor(element){
    element.style.backgroundColor="blue";
}

let text="This is Text";
console.log(text.length);

let specific=text[9];
console.log(specific);

let text1=" concatenate";
console.log(text+text1);

console.log(text1.toUpperCase());
let text2="   This is String";
console.log(text2.trim());

let x="Hello world";
console.log(x.replace("world","everyone"));

console.log(x.indexOf("world"));
console.log(x.includes("world"));
console.log(x.slice(6));


let name = "John";
let age = 22;
let text3 = `Name= ${name},Age=${age}`;
console.log(text3);

let text4=`This is 
multiline 
string...`;
console.log(text4);

let price=10;
let vat=0.1;
console.log(`Total:${(price*(1+vat)).toFixed(2)}`);

let a=22;
console.log(a);
let b=22.5;
console.log(b);
let c="12345";
console.log(Number(c));

let y=9999999999999999n;
console.log(BigInt(y));
let z=123456789101112131415n;
console.log(y+z);
console.log(z.toString());


let number=56.6;
console.log(Math.round(number));
console.log(number.toString());
let F="50.5";
console.log(parseFloat(F));



console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);