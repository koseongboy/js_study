function add1(a = 1, b = 1) {
    return a + b;
}

const add2 = (a, b) => {
    return a + b;
}

//코드가 간결해짐
const add3 = (a, b) => a + b;
const pow = a => a * a;


console.log(add2(10, 20));