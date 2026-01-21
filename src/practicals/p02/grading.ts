// Write your code below
const score = +process.argv[2]

if (isNaN(score)) {
    console.log ('Invalid input');
    process.exit()
}

if (score > 100 || score < 0) {
    console.log ('Invalid input');
    process.exit()
}

if (score >= 80 ) {
    console.log('A');
}else if (score >= 70) {
    console.log('B');
}else if (score >= 60) {
    console.log('C');
}else if (score >= 50) {
    console.log('D');
}else if (score < 50) {
    console.log('F');
}else {
    console.log('Invalid input');
}