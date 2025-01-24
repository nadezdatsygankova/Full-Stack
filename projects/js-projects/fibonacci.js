
let a =[];
let length = a.length;
function fibonacci(n) {
  for (let i = 0; i < n; i++){
    if (i === 0){
      a[i] = 0;
    }
    else if (i === 1){
      a[i] = 1;
    }
    else {
      a[i] = a[i-1] + a[i-2];
    }
  }
 return a;
  }
  let result = fibonacci(10);
  console.log(result);