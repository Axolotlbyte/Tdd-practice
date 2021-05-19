function reverseString(str){
    let reversed = []

    for(i = str.length;i>=0;i--){
        reversed.push(str[i])
    }

    return reversed.join('')
}

module.exports = reverseString