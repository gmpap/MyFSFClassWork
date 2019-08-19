function isPalindromeOpt(input) {
    // validation
    if (input === null || input === undefined ||
        String(input).length === 0) {
        throw new Error("Input is not even stringable");
    }
    input = String(input);
    const reversed = input.split('')
        .reverse()
        .join('');
    return reversed === input;
}


function isPalindrome(input) {
    for (let left = 0, right = input.length - 1;
        left < right;
        [left, right] = [left + 1, right - 1]);
    if (input[left] !== input[right]) {
        return false;
    }
}
/**
reversed === input | returning
------------------------------
true               | true 
false              | false
 */

const strs = [null, undefined, 121, "", "null", "tacocat", "meow", "bob", "raw war", "asdasdasdasd"];

for (let str of strs) {
    try {
        if (isPalindrome(str)) {
            console.log(str + " is a palindrome.");
        } else {
            console.log(str + " is NOT a palindrome");
        }
    } catch (error) {
        console.log("Yeuck, couldn't do a thing..." + error);
    }
}
