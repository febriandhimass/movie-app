function sorting(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let greater = [];
  let less = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }
  
  return sorting(less).concat(pivot, sorting(greater));
}

function anagram(arr) {
  let result = {};

  for (let word of arr) {
    let splittedWord = word.split("");
    let sortedWord = sorting(splittedWord).join();
    if (result[sortedWord]) {
      result[sortedWord].push(word);
    } else {
      result[sortedWord] = [word];
    }
  }

  return Object.values(result);
}

const arr = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
const result = anagram(arr);
console.log(result);
