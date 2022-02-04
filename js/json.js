const monkey = {
    name: "ringo",
    face: "funny",
    age: 11,
    food: ["banana", "apple", "strawberry"],
    tail: true,
    location: {
        country: "Congo",
        place: "forest",
        isAfrica: true,
    }
}

//json으로 만들기
const monkeyJSON = JSON.stringify(monkey);

console.log(monkeyJSON);

//접근 불가
console.log(monkeyJSON.name);

//파싱(되돌리기)
const monkeyJSONParse = JSON.parse(monkeyJSON);
console.log(monkeyJSONParse);