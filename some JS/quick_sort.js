let numbers=[];

for (let i = 0 ; i < 10; i++) {
  let number = Math.floor(Math.random() * 100);;
  numbers[i]= number;
};

console.log('Original Array: ' + numbers);
console.log('Sorted Array  : ' + quicksort(numbers));

function quicksort(arr){
  if (arr.length<=1) {
    return arr
  };

  let pivot = arr[arr.length-1];
  let left =[];
  let right =[];

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    };
  }
  return [...quicksort(left), pivot, ...quicksort(right)]
};
