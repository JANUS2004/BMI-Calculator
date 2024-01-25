function calculateBMI() {
    const ageGroup = document.getElementById("ageSelector").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Invalid input. Please enter valid values for weight and height.");
        return;
    }

    const bmi = weight / (height * height);
    displayResult(bmi, ageGroup);
    updateSpeedometer(bmi);
}

function displayResult(bmi, ageGroup) {
    const resultElement = document.getElementById("result");
    let resultText = '';

    if (ageGroup === 'children') {
        if (bmi < 5) {
            resultText = "Underweight - Dangerously low BMI!";
        } else if (bmi >= 5 && bmi < 85) {
            resultText = "Healthy weight - Keep it up!";
        } else if (bmi >= 85 && bmi < 95) {
            resultText = "At risk of overweight - Maintain a healthy lifestyle.";
        } else {
            resultText = "Overweight - Take action for a healthier lifestyle.";
        }
    } else {
        if (bmi > 40) {
            resultText = "Obese Class 3 - Extremely high BMI!";
        } else if (bmi >= 35 && bmi < 40) {
            resultText = "Obese Class 2 - Very high BMI.";
        } else if (bmi >= 30 && bmi < 35) {
            resultText = "Obese Class 1 - High BMI.";
        } else if (bmi >= 25 && bmi < 30) {
            resultText = "Overweight - Consider a healthier lifestyle.";
        } else if (bmi >= 18.5 && bmi < 25) {
            resultText = "Healthy weight - Well done!";
        } else if (bmi >= 17 && bmi < 18.5) {
            resultText = "Mild thinness - Consider gaining some weight.";
        } else if (bmi >= 16 && bmi < 17) {
            resultText = "Moderate thinness - Consider gaining more weight.";
        } else {
            resultText = "Severe thinness - Dangerously low BMI!";
        }
    }

    resultElement.textContent = resultText;
}

function updateGauge(bmi) {
    const gaugeContainer = document.getElementById("gauge-container");
    gaugeContainer.innerHTML = ''; // Clear previous gauge

    const gauge = new JustGage({
        id: "gauge-container",
        value: bmi,
        min: 0,
        max: 50, // Adjust as needed based on your BMI range
        title: "BMI",
        label: "kg/m²",
        levelColors: ["#ff0000", "#f9c802", "#a9d70b", "#55BF3B"],
        levelColorsGradient: true,
        showMinMax: false,
    });
}