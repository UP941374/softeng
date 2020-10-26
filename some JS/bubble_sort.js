let numbers2 = [];
let numbers = [49,3,87,82,90,54,39,22,11,85,77,3,86,86,73,5,74,49,45,46];
let temp=0;
let steps = 0;

// for (let i = 0 ; i < 20; i++) {
//   number = Math.floor(Math.random() * 100);
//   numbers[i]= number;
// };

//copy array
numbers2=numbers;



console.log('Original Array: ' + numbers);

console.log('---');

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > numbers[j+1]) {
      temp = numbers[j+1];
      numbers[j+1] = numbers[j];
      numbers[j]=temp;
      temp=0;
      steps++;
    }
  }
}


console.log('Sorted Array  : ' + numbers2);
console.log('Steps: '+steps);
