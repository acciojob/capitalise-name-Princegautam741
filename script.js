document.addEventListener("DOMContentLoaded", function() {
    // Get the input field by its id
    var inputField = document.getElementById("fname");

    // Add a blur event listener to the input field
    inputField.addEventListener("blur", function() {
        // Convert the content of the input field to uppercase
        inputField.value = inputField.value.toUpperCase();
    });
});
