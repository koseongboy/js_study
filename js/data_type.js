const name = "Seonghyeon Ko";
const age = 21;
const weight = 104.3;
const isMale = true;
const money = null;
const girfriend = undefined;
const hobbies = "baseball, basketball, game, computer";

console.log(typeof girfriend);
console.log("제 이름은 " + name + " 입니다."); //옛날 방식
console.log(`제 이름은 ${name} 입니다.`); //요즘 방식

console.log(name.substring(0, 10).toUpperCase());
console.log(name.split("")); //모든 글자에 대해 슬라이싱
console.log(name.split(" ")); //띄어 쓰기를 기준으로 슬라이싱
console.log(hobbies.split(", "));
