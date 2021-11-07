/**
 * @param {string} s
 * @return {boolean}
 */

String.prototype.reverse = function() {
    let reversed = '';
    
    for (let i = this.length - 1; i >= 0; i--) {
        reversed += this[i]
    }
    
    return reversed
}

const isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'');
    
    return s.toLowerCase() === s.reverse().toLowerCase()
};
