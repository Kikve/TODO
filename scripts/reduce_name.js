

function reduce_name  (str)  {
    let words = str.split(' ')

    console.log(words)
    if (words.length > 2){

        return `${words[0][0]}`+  `${words[1][0]}`+ `${words[2][0]}` 

    } else if (words.length == 2) {
        return words[0].substring(0, 3) + words[1][0]

    }else {
        return str.substring(0, 3)
    }
}



module.exports = reduce_name
