document.addEventListener('DOMContentLoaded', function() {
    // Get password and confirmpassword elements
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmpassword');

    // Add input event listener to confirmpassword field
    confirmPasswordInput.addEventListener('input', function() {
        const errorTextContainer = document.querySelector('.confirm-password-error-text');
        while (errorTextContainer.firstChild) {
            errorTextContainer.removeChild(errorTextContainer.firstChild);
        }
        
        if (confirmPasswordInput.value !== passwordInput.value) {
            passwordInput.style.outlineColor = 'red';
            confirmPasswordInput.style.outlineColor = 'red';
            const errorText = document.createElement('span');
            errorText.style.color = 'red';
            errorText.textContent = '*Password did not match';
            
            errorTextContainer.appendChild(errorText);
        } else {
            passwordInput.style.outlineColor = '';
            confirmPasswordInput.style.outlineColor = '';
        }
        
    });
});