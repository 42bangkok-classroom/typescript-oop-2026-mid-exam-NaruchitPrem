// Write your code below
export{}
let input = +process.argv[2];

if (Number.isNaN(input) || input <= 0){
}else for (let i = 1; i <= input; i++){
    let result = ''
    for (let x = input - i; x > 0; x --){
      result += ' '
    }
    for (let j = i; j > 0; j--){
      result += j
    }
    console.log(result)
  }
