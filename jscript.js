function showPassword() {
    var passwordInput = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("show-password");
   
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

  function login(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (email == 'mkrodsullivan' && password == 'MkRoD'){
        window.location.assign("dashboard.html")
    }
    else{
        alert("wrong entry invalid")
    }
}