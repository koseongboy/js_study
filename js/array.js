const animal = ["lion", "bear", "monkey"];

console.log(animal[1]);

//특정 번호에 추가하기
animal[3] = "deer";
console.log(animal);

//맨뒤에 추가하기
animal.push("ko");
console.log(animal);

//맨앞에 추가하기
animal.unshift("hippo");
console.log(animal);

//맨 뒤에꺼 빼내기
animal.pop();
console.log(animal);

//배열인가?
console.log(Array.isArray(animal));

//인덱스 추출
console.log(animal.indexOf("bear"));

//삭제하기 (시작 인덱스, 삭제할 갯수)
animal.splice(1, 1);
console.log(animal);