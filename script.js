function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	let 

const  arr = [0,1]

for(let i = 0; i<=num; i++){
   temp = a+b;
 arr.push(temp)
  a = b;
  b = temp
	
}

return arr[arr.length-1];
}

module.exports = fibonacci;
