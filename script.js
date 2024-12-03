<script>
  function calculate() {
    // Get the values from the input fields
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var operation = document.getElementById('op').value;
    var result;

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers!');
      return;
    }

    // Perform the operation based on the selection
    if (operation === 'add') {
      result = num1 + num2;
    } else if (operation === 'sub') {
      result = num1 - num2;
    } else if (operation === 'mul') {
      result = num1 * num2;
    } else if (operation === 'div') {
      if (num2 === 0) {
        alert('Division by zero is not allowed!');
        return;
      }
      result = num1 / num2;
    }

    // Display the result
    document.getElementById('result').value = result;
  }

  function reset() {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('result').value = '';
  }
</script>
