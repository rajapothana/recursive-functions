const factorial = function(number){
  let value = 0;
  if(number > 0){
    return factorial(number-1)+number;
  }
  return value;
}
console.log(factorial(+process.argv[2]));
