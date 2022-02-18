let value = false

function Unquie(char){
for(let i = 0; i < char.length; i++){
    for(let j = i+1; j < char.length; j++){
        if(char[i] === char[j]){
            return value
        }
    }
    }
    return true
}

console.log(Unquie('Moon'))
console.log(Unquie('Jake'))

//Big O
//ANSWER: O(n^2)