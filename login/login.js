var usernameElement = document.getElementById('username');
var passwordElement = document.getElementById('password');
var loginSuccessAlert = document.getElementById('login-success-alert');
var loginErrorAlert = document.getElementById('login-error-alert');

var users = [];
var userString = localStorage.getItem('users');

if (userString != null) {
    users = JSON.parse(userString);
}

function onLogin(event) {
    event.preventDefault();
  
    var username = usernameElement.value;
    var password = passwordElement.value;
    var userLoggedIn = false;
    
    for (let i = 0; i < users.length; i++) {
      const u = users[i];
      if (u.username === username && u.password === password) {
        userLoggedIn = true;
        localStorage.setItem('user-logged-id', u.id);
        localStorage.setItem('user-logged-username', u.username);
        break;
      }
    }
  
    if (userLoggedIn) {
      localStorage.setItem('login-success-alert', '');
      loginSuccessAlert.style.display = "block";
      loginErrorAlert.style.display = 'none';
        
      setTimeout(() => {
        window.location.href = '/Project-github/main.html';
      }, 2000);
    } else {
      localStorage.removeItem('user-logged-id');
      localStorage.removeItem('user-logged-username');
      loginSuccessAlert.style.display = 'none';
      loginErrorAlert.style.display = 'block';
    }
}
