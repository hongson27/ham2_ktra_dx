let input = prompt('Nhap tu vao day:');
let arr1 = [];

function isPalindrome(arr) {
    arr = input.split('');
    for (let i = arr.length -1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr1[i]) {
            return false;
        }
    }
    return true;
}
let check = isPalindrome(input);
alert(check);