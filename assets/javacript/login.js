document.getElementById("loginDisplay").addEventListener("click", function() {
    document.querySelector(".login-main").style.display = "block";
});

document.querySelector(".close-icon").addEventListener("click", function() {
    document.querySelector(".login-main").style.display = "none";
});


document.getElementById("signupClassDisplay").addEventListener("click", function() {
    document.querySelector(".login-div").style.display = "none";
    document.querySelector(".signup-div").style.display = "block";
});

document.getElementById("loginClassDisplay").addEventListener("click", function() {
    document.querySelector(".signup-div").style.display = "none";
    document.querySelector(".login-div").style.display = "block";
});



function login() {
    var email = document.getElementById("useremail").value;
    var password = document.getElementById("userpassword").value;

    if (email === "mohsinnaqvi556" && password === "LuminaThePassword") {
        window.location.href = "admin.html";
    } else {
        alert("Invalid email or password");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login").addEventListener("click", login);
});
