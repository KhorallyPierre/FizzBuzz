// Fizz buzz - question calls you to print numbers 1 - x where x is the number that’s passed in.
// If the number is divisible by 3 instead of printing the number print fizz, by 5 print buzz if divisible by
//  3 and 5 print fizz buzz

// create a function called fizzbuzz wwhere it calls you to print numbers 1  -x

function fizzBuzz(x){
  for (let i = 1; i <= x; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log('fizzBuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0){
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}
fizzBuzz(40)
