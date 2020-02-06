const list = [23, 4, 42, 15, -1, 16, 0, 8, 3]
// const list = document.getElementById("ms_array").innerHTML;
// first it starts calling function mergeSort
const mergeSort = (list) =>{
  if(list.length <= 1) return list;
  const middle = list.length / 2 ;
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  var result = [];
  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    } else if(left.length) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
  }
  return result;
  // return document.getElementById("ms_output").innerHTML = result;
}

console.log(mergeSort(list)) // [ 3, 4, 8, 15, 16, 23, 42 ]