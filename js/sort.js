//###################//
//####BUBBLE SORT####//
//###################//

function section_bubbleSort() {
    let bubbleSort = arr => {

       let n = arr.length;
       

         for (i = 0; i < n; i++) {
           for (j = 0; j < n; j++) {
               if (arr[j] > arr[j + 1]) {
                   [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
               }
           }
         }
               return arr;
   }
   let user_input = document.getElementById('bubble_sort_input').value
   let numbers = user_input.split(',').map(elem => parseInt(elem, 10))
       // first call to bubble sort
   let sortedArray = bubbleSort(numbers)
   document.getElementById('bubble_output').innerHTML = "Result: " + sortedArray;
   // console.log(sortedArray);
}

//###################//
//####MERGE SORT####//
//###################//


// const list = [23, 4, 42, 15, -1, 16, 0, 8, 3]
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
  
  function callMergeSort () {
    let user_input = document.getElementById("ms_array_input").value
    let list = user_input.split(",").map(elem => parseInt(elem, 10))
    let sortedArray = mergeSort(list)
    document.getElementById("ms_output").innerHTML = "Result: " + sortedArray;
    console.log(sortedArray);
  }
  
// 

//###################//
//####QUICK SORT####//
//###################//

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// first function to be called, after the input from the user

function callQuickSort () {
    let user_input = document.getElementById("qs_array_input").value
    let items = user_input.split(",").map(elem => parseInt(elem, 10))
    let sortedArray = quickSort(items, 0, items.length - 1)
    document.getElementById("qs_output").innerHTML = "Result: " + sortedArray;
    console.log(sortedArray);
}

//###################//
//####INSERT SORT####//
//###################//

function Insertion_Sort(arr) {
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
//move current element to the first position
        arr.unshift(arr.splice(i, 1)[0]);
    }
    else if (arr[i] > arr[i - 1]) {
        continue; //leave current element where it is
    } 
    else {
        //find where element should go
        for (let j = 1; j < i; j++) {
            if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                //move element
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
            }
        }   
    }
    return arr;
}

function callInsertionSort() {
    let user_input = document.getElementById("is_array_input").value;
    let array_input = user_input.split(",").map(elem => parseInt(elem, 10));
    let sortedArray = Insertion_Sort(array_input);
    document.getElementById("is_output").innerHTML = "The sorted array is: " + sortedArray;
    console.log(sortedArray);
}

//###################//
//####SELECTION SORT####//
//###################//

function Selection_Sort(arr, compare_Function) {

    function compare(a, b) {
        return a - b;
    } 
        let min = 0;
        let index = 0;
        let temp = 0;
    //{Function} compare_Function Compare function
        compare_Function = compare_Function || compare;
        for (let i = 0; i < arr.length; i += 1) {
        index = i;
        min = arr[i];
        for (let j = i + 1; j < arr.length; j += 1) {
            if (compare_Function(min, arr[j]) > 0) {
            min = arr[j];
            index = j;
    }
    }
        temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    }
    //return sorted arr
        return arr;
}

function callSelectionSort() {
    let user_input = document.getElementById("sl_input").value;
    let array_input = user_input.split(",").map(elem => parseInt(elem, 10));
    let sortedArray = Selection_Sort(array_input);
    document.getElementById("sl_output").innerHTML = "The sorted array is: " + sortedArray;
    console.log(sortedArray);
}
}
