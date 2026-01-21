const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  // Write your code below
  let str : string [] = comment.split(" ")
  let result : string = '';
  for (let i = 0 ;i > str.length ; i++){
    if (str[i].length >= 5){
      result += str[i] + ' ';
    }
  }

  console.log(str[0]);
  console.log(result);
  return result
}

shortenComment(comment);