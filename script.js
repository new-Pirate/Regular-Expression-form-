var userName = document.querySelector("input[name=name]");
var userPhone = document.querySelector("input[name=phone]");
var userEmail = document.querySelector("input[name=email]");

function check() {
    var valueName = document.querySelector("input[name=name]").value;
    var valuePhone = document.querySelector("input[name=phone]").value;
    var valueEmail = document.querySelector("input[name=email]").value;
    var regexpName = /^[A-Z]{1}[a-z]+$/g;
    var regexpPhone = /^[+][7]{1}\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/gm;
    var regexpEmail = /[0-9a-z.-]+@[0-9a-z-]+\.[a-z]{2}/g;
    var count = 0;

    function validName() {
        if (regexpName.test(valueName)) {
            userName.style.border = '2px solid green';
        } else {
            userName.style.border = '2px solid #FF0000';
            count++;
        };
    }

    function validPhone() {
        if (regexpPhone.test(valuePhone)) {
            userPhone.style.border = '2px solid green';
        } else {
            userPhone.style.border = '2px solid #FF0000';
            count++;
        };
    }

    function validEmail() {
        if (regexpEmail.test(valueEmail)) {
            userEmail.style.border = '2px solid green';
        } else {
            userEmail.style.border = '2px solid #FF0000';
            count++;
        };
    }

    validName();
    validPhone();
    validEmail();

    if (count == 0) {
        alert("Confirm");
        window.location.reload();
    }
}