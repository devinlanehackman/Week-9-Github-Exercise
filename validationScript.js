    // JavaScript code for form validation
// Prevent form from submitting
let form = document.getElementById('myForm')
let input = document.getElementById('inputField')
let submit = document.getElementsByTagName('button')[0]
let pattern = /^[a-zA-Z0-9]+$/
submit.addEventListener('click', evt => {
    if (pattern.test(input.value)) {
        input.setCustomValidity('')
        alert("sucess")
    }
    else { 
        input.setCustomValidity('Please Enter only alphanumeric characters.')
    }
})


      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message