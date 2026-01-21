// Write your code below
const score = +process.argv[2]

if (isNaN(score)) {
    console.log ('Invalid input');
}else if (score > 100 || score < 0) {
    console.log ('Invalid input');
}else if (score >= 80 ) {
    console.log('Grade is A');
}else if (score >= 70) {
    console.log('Grade is B');
}else if (score >= 60) {
    console.log('Grade is C');
}else if (score >= 50) {
    console.log('Grade is D');
}else if (score < 50) {
    console.log('Grade is F');
}else {
    console.log('Invalid input');
}
