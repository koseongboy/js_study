const animals = [
    {name: "lion", size: "big", isAggresive: true, weight: 200},
    {name: "monkey", size: "medium", isAggresive: true, weight: 30},
    {name: "cat", size: "small", isAggresive: false, weight: 10},
    {name: "rat", size: "small", isAggresive: false, weight: 2},
];

for(let i = 0; i < animals.length; i++) {
    console.log(animals[i].name);
}

for(let animal of animals) {
    console.log(animal.name);
}

let i = 0;
while (i < animals.length) {
    console.log(animals[i].name);
    i++;
}

// forEach, map, filter, reduce

animals.forEach(function(animal, index) {
    console.log(animal.size);
    console.log(index);
});

const animalsNames = animals.map(function(animal) {
    return `Animal's name is ${animal.name} and size is ${animal.size}`;
});

console.log(animalsNames);


const smallAnimals = animals.filter(function(item) {
    //return 다음에 조건이 와야함
    return item.size === "small";
});

console.log(smallAnimals);



const numbers = [1, 10, 11, 23, 444];
const total = numbers.reduce(function(acc, cur) {
    //cur은 현재 값
    //acc는 이전 인덱스의 return값
    console.log(acc, cur);
    return acc + cur;
});

console.log(total);

const totlaWeight = animals.reduce(function(acc, cur) {
    return acc + cur.weight;
//reduce의 두 번째 파라미터: acc의 초기값 지정
}, 0);

console.log(totlaWeight);