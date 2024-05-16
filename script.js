function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	let 



for(let i = 0; i<=num; i++){
   let temp = a+b;
 
  a = b;
  b = temp
	
}

return b;
}

module.exports = fibonacci;
