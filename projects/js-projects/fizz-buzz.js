let output =[];
function fizzBuzz (i){
    output.push(i)
}
for(i=1; i< 35; i++)
  {
    fizzBuzz (i);
  }

for(i=0; i< output.length; i++){
  if ((output[i]%5 === 0) && (output[i]%3 === 0) )
    {
      output[i] ="FizzBuzz"
    }
  if (output[i]%3 === 0 )
    {
      output[i] = "Fizz"
    }
  if (output[i]%5 === 0)
    {
    output[i] ="Buzz"
    }
}
console.log(output)