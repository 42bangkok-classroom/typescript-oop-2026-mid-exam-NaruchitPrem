export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const all = [...arr1, ...arr2];

  const result: number[] = [];

  for (const num of all) {
    const count = all.filter((n) => n === num).length;

    if (count === 1) {
      result.push(num);
    }
  }

  return result;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];