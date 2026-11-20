const numbers = [3, 8, 12, 5, 7, 20, 1, 14];
let evens = [];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  }
}
console.log(evens);

let prices = [500, 200, 1312, 300, 1000, 40000];
let expensive = [];
const length = prices.length;
let Pop = [];

for (i = 0; i < length; i++) {
  Pop = prices.pop();

  if (Pop >= 1000) {
    expensive.push(Pop);
  }
}
console.log(prices);
console.log(expensive);

let scores = [98, 91, 85, 77, 60];
let top3 = [];
top3 = scores.slice(0, 3);

console.log(top3);

for (i = 0; i < top3.length; i++) {
  if (top3[i] >= 90) {
    console.log("Gold: " + top3[i]);
  } else {
    console.log("Silver: " + top3[i]);
  }
}
let fruits = ["алим", "лууван", "жүрж", "киви"];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "лууван") {
    fruits.splice(i, 1);
  }
}
console.log(fruits);

console.log("Dasgal#5");
let names = ["Бат", "Сарангэрэл", "Оюун", "Тэмүүлэн", "Нараа"];
let longNames = [];

for (i = 0; i < names.length; i++) {
  if (names[i].length > 5) {
    longNames.push(names[i]);
  }
}
let result = longNames.join(", ");
console.log(result);
