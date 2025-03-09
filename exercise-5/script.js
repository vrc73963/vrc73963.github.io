
function divide() {
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

if (isNaN(num1) || isNaN(num2)) {
errorDiv.textContent = 'Please enter valid numbers';
return;
}

if (num2 === 0) {
errorDiv.textContent = 'Cannot divide by zero';
return;
}


const result = num1 / num2;
resultDiv.textContent = `Result: ${result}`;


if (result % 1 === 0) {
resultDiv.style.color = '#4CAF50';  // Green for whole numbers
} else {
resultDiv.style.color = '#2196F3';  // Blue for decimal numbers
}
}

// Add event listeners 
document.getElementById('num1').addEventListener('input', function() {
this.style.backgroundColor = this.value ? '#f0f8ff' : 'white';
});

document.getElementById('num2').addEventListener('input', function() {
this.style.backgroundColor = this.value ? '#f0f8ff' : 'white';
});
