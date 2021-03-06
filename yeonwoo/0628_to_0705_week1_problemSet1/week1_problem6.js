/**
 * Write a program to get the first n Fibonacci numbers
 * @param num
 * @returns {*}
 */
function fibonacci(num) {
    array = []
    array[0] = 1
    array [1] = 1
    for (let i = 2; i < num + 1; i++) {
        array[i] = array[i-1] + array[i-2]
    }
    return array[num-1]
}

console.log(fibonacci(8))
console.log(fibonacci(70))