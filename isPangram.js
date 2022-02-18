function isPangram(pan){
    let word = pan.toLowerCase().split('')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    for(let i =0; i < word.length; i++){
        for(let j = 0; j <alphabet.length; j++){
            if(word[i].length === alphabet[i].length){
                return true
            }
        }
    }
    return false;
}

console.log(isPangram('The quic brown fox jumps over the lazy dog'))

//Big o
//answer: TC: O(n^2) SC: O(n^2)