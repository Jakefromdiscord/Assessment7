let words = ['sam', 'jake', 'cat', 'hello']

const findLongestWord = (string) =>{
    let word = string.split(' ')
    let longestWord = 0
    for(let i = 0; i < word.length; i++){
        if(word[i].length > longestWord){
            longestWord = word[i].length
        }
    }
    return longestWord;
}

console.log(findLongestWord('Jake is Awesome'))

//big o
//Asnwer: tc: O(1) SC: O(n)
