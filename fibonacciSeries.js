const generateFibo = function (num) {
  if (num == 0 || num == 1){
    return num;
  }
  return (generateFibo(num - 1 ) + generateFibo(num - 2 ));
}
 console.log(generateFibo(5));
