// Write your code below
export{}
let input = +process.argv[2];

if (process.argv[2] === "") {
  console.log('Invalid Input');
  process.exit();
}

if (Number.isNaN(input) || input <= 0) {
    console.log('Invalid Input');
    process.exit();
}

for (let i = 1; i <= input; i++){
  if (i % 5 === 0 && i % 3 === 0){
    console.log('FizzBuzz');
  }else if (i % 3 === 0){
    console.log('Fizz');
  }else if (i % 7 === 0){
    console.log('Buzz');
  }else if (!(i % 3 === 0 || i % 7 === 0)){
    console.log(`${i}`);
  }
}