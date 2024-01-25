function validatePassword() {
    var password = document.getElementById("Password").value;

    if (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*]/.test(password)
    ) {
        return true;
    } else {
        document.getElementById("result").innerHTML =
            "Password does not meet the criteria. Please include at least 8 characters, one uppercase letter, one digit, and one special character.";
        return false;
    }
}

function generateCaptcha() {
    var captchaContainer = document.getElementById('captcha');
    var captchaValue = Math.floor(Math.random() * 9000) + 1000;
    captchaContainer.textContent = captchaValue;
}

function validateCaptcha() {
    var enteredCaptcha = document.getElementById('captchaInput').value;
    var generatedCaptcha = document.getElementById('captcha').textContent;

    if (enteredCaptcha === generatedCaptcha) {
        return true;
    } else {
        alert("Incorrect captcha. Please try again.");
        return false;
    }
}

function validateForm() {
    var isPasswordValid = validatePassword();
    var isCaptchaValid = validateCaptcha();

    if (isPasswordValid && isCaptchaValid) {
        window.location.href = "BMI.html";
    }
}

// Initial captcha generation
generateCaptcha();