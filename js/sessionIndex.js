auth.onAuthStateChanged(function (user) {
    if (user == null) {
        location.href = "login.php";
    } else {
        var email = user.email;
        document.getElementById("admin-name").innerHTML = email;
    }
});