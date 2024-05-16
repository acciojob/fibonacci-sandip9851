function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;

const  arr = [0,1]

for(let i = 0; i<=num; i++){
  let temp = a+b;
 arr.push(temp)
  a = b;
  b = temp
}

return arr;
}

module.exports = fibonacci;
