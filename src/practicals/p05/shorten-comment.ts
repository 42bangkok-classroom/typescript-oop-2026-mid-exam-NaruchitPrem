const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  // Write your code below
  const words: string[] = comment.split(" ");

  let result = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length >= 5) {
      result += word + " ";
    }
  }

  return result.trimEnd();
}