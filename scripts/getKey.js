
function getKey  (str)  {
    regex = /\(([^)]+)\)/g
    let match = regex.exec(str)
    if ( match == null) {
        return str
    } else {
        return match[1]
    }

}



module.exports = getKey
