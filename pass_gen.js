function generatePassword() {
    const length = parseInt(document.querySelector('#length').value);
    const includeDigits = document.querySelector('#includeDigits').checked;
    const includeUpper = document.querySelector('#includeUpper').checked;
    const includeLower = document.querySelector('#includeLower').checked;

    try {
        if (isNaN(length) || length <= 0) {
            throw new Error('Please enter a valid length for the password.');
        }

        let characters = '';
        if (includeDigits) characters += '0123456789';
        if (includeUpper) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLower) characters += 'abcdefghijklmnopqrstuvwxyz';

        if (characters === '') {
            throw new Error('Please select at least one character type.');
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        document.querySelector('#password').innerText = `Generated Password: ${password}`;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
