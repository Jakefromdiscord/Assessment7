const arr = [1, 4, 11, 2, 37, -4]

let value = 'false'
for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr.length; j++){
        if(arr[i] + arr[j] === 0){
            value = 'true'
        }
    }
}

console.log(value)

//My big O
//ANSWER: O(n^2)