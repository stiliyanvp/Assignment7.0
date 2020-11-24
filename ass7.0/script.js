let n1 = Number(prompt('Enter the first number'));
let n2 = Number(prompt('Enter the second number'));
let n3 = Number(prompt('Enter the third number'));
let displayLargest;

if (n1 >= n2 && n2 >= n3) {
    displayLargest = n1;
}
else if (n2 >= n1 && n1 >= n3) {
    displayLargest = n2;
}
else {
    displayLargest = n3;
}

alert("The largest number is " + displayLargest);