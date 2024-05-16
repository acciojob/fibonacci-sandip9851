function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	let temp;



for(let i = 2; i<num; i++){
   temp = a+b;
 
  a = b;
  b = temp
	
}

return b;
}

module.exports = fibonacci;
