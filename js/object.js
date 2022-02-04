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


console.log(monkey);

//접근
console.log(monkey.face);
console.log(monkey.food[2]);
console.log(monkey.location.country);

monkey.name = "Star";

console.log(monkey.name);

monkey.food[1] = "peanut";
console.log(monkey.food[1]);

//추가
monkey.weight = 50;
console.log(monkey);