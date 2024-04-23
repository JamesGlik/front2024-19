const form = document.querySelector("#sign-up");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const personalNumberInput = document.querySelector("#personal-number");
const mobileNumberInput = document.querySelector("#mobile-number");
const jobDescriptionInput = document.querySelector("#job-description");

const nameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const personalNumberError = document.querySelector("#personal-number-error");
const mobileNumberError = document.querySelector("#mobile-number-error");
const jobDescriptionError = document.querySelector("#job-description-error");

function checkUserName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "User name is required";
        nameInput.classList.remove("correct");
        nameInput.classList.add("error");
        return false;
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("error");
        nameInput.classList.add("correct");
        return true;
    }
}

function checkEmail() {
    if (!emailInput.validity.valid) {
        emailError.textContent = "Email is required and must be valid";
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        return false;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        return true;
    }
}

function checkPassword() {
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        passwordInput.classList.remove("correct");
        passwordInput.classList.add("error");
        return false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        passwordInput.classList.remove("correct");
        passwordInput.classList.add("error");
        return false;
    } else {
        passwordError.textContent = "";
        passwordInput.classList.remove("error");
        passwordInput.classList.add("correct");
        return true;
    }
}

function checkPersonalNumber() {
    const value = personalNumberInput.value;
    const isValidPersonalNumber = value.length === 11 && !isNaN(value);

    if (!isValidPersonalNumber) {
        personalNumberError.textContent = "Personal number must be 11 digits and contain only numbers";
        personalNumberInput.classList.remove("correct");
        personalNumberInput.classList.add("error");
        return false;
    } else {
        personalNumberError.textContent = "";
        personalNumberInput.classList.remove("error");
        personalNumberInput.classList.add("correct");
        return true;
    }
}

function checkMobileNumber() {
    const value = mobileNumberInput.value;
    const isValidMobileNumber = value.length === 9 && !isNaN(value);

    if (!isValidMobileNumber) {
        mobileNumberError.textContent = "Mobile number must be 9 digits and contain only numbers";
        mobileNumberInput.classList.remove("correct");
        mobileNumberInput.classList.add("error");
        return false;
    } else {
        mobileNumberError.textContent = "";
        mobileNumberInput.classList.remove("error");
        mobileNumberInput.classList.add("correct");
        return true;
    }
}

function checkJobDescription() {
    if (jobDescriptionInput.value.length > 50) {
        jobDescriptionError.textContent = "Job description must not exceed 50 characters";
        jobDescriptionInput.classList.remove("correct");
        jobDescriptionInput.classList.add("error");
        return false;
    } else {
        jobDescriptionError.textContent = "";
        jobDescriptionInput.classList.remove("error");
        jobDescriptionInput.classList.add("correct");
        return true;
    }
}

nameInput.addEventListener("input", checkUserName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);
personalNumberInput.addEventListener("input", checkPersonalNumber);
mobileNumberInput.addEventListener("input", checkMobileNumber);
jobDescriptionInput.addEventListener("input", checkJobDescription);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const isUserNameValid = checkUserName();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isPersonalNumberValid = checkPersonalNumber();
    const isMobileNumberValid = checkMobileNumber();
    const isJobDescriptionValid = checkJobDescription();

    if (isUserNameValid && isEmailValid && isPasswordValid && isPersonalNumberValid && isMobileNumberValid && isJobDescriptionValid) {
        form.submit();
    }  else {
		showSelectedModal("#sign-up-error-modal");
	}
});