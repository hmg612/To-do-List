//console.log("I'm Working. I'm JS. I'm beautiful. I'm worth it.");

// <Variable>(변수)
// const(상수이므로 값 변경x), let(var과 비슷한 역할, but 가급적 사용x), var(과거에는 var만 사용했으나 현재는 const/let 사용으로 인해 var 사용x)

/*
let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);
*/

// <String>
// const what = "Nicolas 😊";
// console.log(what);

// <Boolean>
// const what = True;

// <Number>
// const what = 111;

// <Float>
// const what = 55.1;

// <Array>
/*
const something = "Something";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, false, 111, "lalala", something];
console.log(daysOfWeek);
*/

// <Object>

/*
const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovie: ["Along the Gods", "LOTR", "Old Boy"],
  favFood: [
    { 
      name: "Kimchi", 
      fatty: false 
    }, 
    { 
      name: "Hamburger", 
      fatty: true 
    }
  ]
}
//console.log(nicoInfo);

nicoInfo.gender = "Female";
//console.log(nicoInfo.favFood[0].name);
console.log(console);

*/

/*
function sayHello(name, age){
  console.log('Hello!', name, ". You are", age, "years old.");
}

sayHello("Nicolas", 15);
*/

// 문자열 입력시 ``(백틱?) 사용하기
/*
function sayHello(name, age){
  console.log(`Hello ${name}. you are ${age} years old.`);
}

sayHello("Nicolas", 15);
*/

// 리턴값 출력하기
/*
function sayHello(name, age){
  return `Hello ${name}. you are ${age} years old.`;
}

const greetNicolas = sayHello("Nico", 15)

console.log(greetNicolas)
*/

// 계산기능 함수 만들기
/*
const calculator = {
  plus : function(a, b){
    return a + b;
  },
  minus : function(a, b){
    return a - b;
  },
  multiple : function(a, b){
    return a * b;
  },
  divide : function(a, b){
    return a / b;
  },
  square : function(a, b){
    return a ** b;
  }
}

const plus = calculator.plus(5, 5)
console.log(plus)

const minus = calculator.minus(5, 5)
console.log(minus)

const multiple = calculator.multiple(5, 5)
console.log(multiple)

const divide = calculator.divide(5, 5)
console.log(divide)

const square = calculator.square(5, 5)
console.log(square)
*/

// DOM(문서 객체 모델?) - tag 및 element들을 객체로

// const title = document.querySelector("#title");

/*
function handleResize() {
  console.log("I have been resized");
}

// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now";
window.addEventListener("resize", handleResize);
*/
/*
function handleResize(event) {
  console.log(event);
}

window.addEventListener("resize", handleResize);
*/

/*
function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
*/

// 조건문 if ~ else

/*
const age = prompt("How old are you?");

if (age >= 18 && age <= 21) {
  console.log("You can drink but you should not");
} else if (age > 21) {
  console.log("Go ahead");
} else {
  console.log("Too young");
}
*/
