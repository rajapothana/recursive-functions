const multiplicationTable = function(number,limit){
  let result = number;
  if(limit == 0){
    return 0;
  }
  result = multiplicationTable(number,limit-1)+result;
  console.log(result);
  return result;
}
multiplicationTable(+process.argv[2],+process.argv[3]);
