let output =[];
let count = 1;
function fizzBuzz (){
  if (count%5 === 0 && count%3 === 0)
    {
      output.push("FizzBuzz")
    }
  if (count%3 === 0)
    {
      output.push("Fizz")
    }
  if (count%5 === 0)
    {
      output.push("Buzz")
    }
  output.push(count);
  count++;
}
for (let i = 1; i <= 100; i++){
fizzBuzz();
}

console.log(output);