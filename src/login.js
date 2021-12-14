/*
 
 var firebaseConfig = {
    apiKey: "AIzaSyA8QAi9aVbUgJAfrni69Fh446IkIPhFS4E",
    authDomain: "login-4a171.firebaseapp.com",
    projectId: "login-4a171",
    storageBucket: "login-4a171.appspot.com",
    messagingSenderId: "150871827794",
    appId: "1:150871827794:web:5f961fa403d0eed191868b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
 

        function signUp(){

                var email = document.getElementById("email");

                var password = document.getElementById("password");

                const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

                promise.catch(e => alert(e.message));

                alert("Signed Up");
        }
  */
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 4) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});