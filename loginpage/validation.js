document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form") || document.querySelector(".page");
    const inputs = form.querySelectorAll("input");
    const phoneInput = inputs[3];
    const passwordInput = inputs[4];
    const confirmPasswordInput = inputs[5];
    const submitButton = form.querySelector("button");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();

        for (let input of inputs) {
            if (input.hasAttribute("required") && input.value.trim() === "") {
                alert("please, enter values for each field .");
                return;
            }
        }

        const phone = phoneInput.value.trim();
        const phoneRegex = /^(010|011|012|015)\d{8}$/;
        
        if (phone.length !== 11) {
            alert(" phone Number must be 11 numbers ");
            return;
        }
        
        if (!phoneRegex.test(phone)) {
            alert("error at phone number .");
            return;
        }
        
        const password = passwordInput.value.trim();
        const capitalLetter = /[A-Z]/;
        const smallLetter = /[a-z]/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < 8) {
            alert("password must be 8 charcter at least.");
            return;
        }

        if (!capitalLetter.test(password)) {
            alert("password must contains one capital letter at least.");
            return;
        }

        if (!smallLetter.test(password)) {
            alert("password must contains one small letter at least.");
            return;
        }

        if (!specialChar.test(password)) {
            alert("password must contains one special charecter at least .");
            return;
        }
        
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("password confirmation isn't match the password .");
            return;
        }

        alert("registration is done successfully ");
        inputs.forEach(input => {
            if (input.type !== "button" && input.type !== "submit") {
                input.value = "";
            }
        });
        
    });
});


