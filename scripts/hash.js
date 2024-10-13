function hash (n) {
    return (Date.now() % 10**n).toString(16)
    
}
module.exports = hash
