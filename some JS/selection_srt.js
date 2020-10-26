let numbers = [];
let sorted = [];
let smallest = 100000;
let b;
for (let i = 0 ; i < 20000; i++) {
  number = Math.floor(Math.random() * 10000)+1;;
  numbers[i]= number;
};

console.log('Original Array: ' + numbers);

while (numbers.length != 0) {
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
    b = i;
  }
}
sorted.push(smallest);
numbers.splice(b,1);
smallest = 1000000;
}

console.log('Sorted Array: ' + sorted);
