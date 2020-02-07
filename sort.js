//BUBBLE SORT

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
    console.log(sortedArray);
}