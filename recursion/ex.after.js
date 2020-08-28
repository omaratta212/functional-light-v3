"use strict";

function coolIsPalindrome(str) {
    if(str.length <= 1) return true
    const rev = [...str].reverse().join('')
    return rev === str
}

function isPalindrome(str, accumulative) {
    if(accumulative === false) return false
    const len = str.length
    if(len <= 1) return true

    const innerStr = str.substring(1, len-1)
    const first = str[0]
    const last = str[len-1]
    return isPalindrome(innerStr, first === last)
}


console.log( isPalindrome("") === true && coolIsPalindrome("") === true );
console.log( isPalindrome("a") === true  && coolIsPalindrome("a") === true )
console.log( isPalindrome("aa") === true  && coolIsPalindrome("aa") === true )
console.log( isPalindrome("aba") === true  && coolIsPalindrome("aba") === true )
console.log( isPalindrome("abba") === true  && coolIsPalindrome("abba") === true )
console.log( isPalindrome("abccba") === true  && coolIsPalindrome("abccba") === true )

console.log( isPalindrome("ab") === false  && coolIsPalindrome("ab") === false )
console.log( isPalindrome("abc") === false  && coolIsPalindrome("abc") === false )
console.log( isPalindrome("abca") === false  && coolIsPalindrome("abca") === false )
console.log( isPalindrome("abcdba") === false  && coolIsPalindrome("abcdba") === false )
