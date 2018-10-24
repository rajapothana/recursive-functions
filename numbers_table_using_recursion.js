const multiplicationTable = function(number,limit){
  let value = number;
  if(limit > 0){
    return multiplicationTable(limit-1)+value;
  }
    console.log(value);
  return value;
}
console.log(multiplicationTable(+process.argv[2],+process.argv[3]));
