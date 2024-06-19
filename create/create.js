var fullnameElement=document.getElementById('fullname')
var userPhoneElement=document.getElementById('user-phone')
var usernameElement=document.getElementById('username')
var passwordElement=document.getElementById('password')


var userExistsErrorAlert=document.getElementById('user-exists-error-alert')

var userCreatedAlert=document.getElementById('user-created-alert')

var users=[]
var userString=localStorage.getItem('users')

if(userString == null){

}
else{
  users=JSON.parse(userString)
}

function onCreateAccount(event) {
    event.preventDefault();
  
    var userfullname = fullnameElement.value;
    var userPhone = userPhoneElement.value;
    var username = usernameElement.value;
    var password = passwordElement.value;
  
    var usernameExists = false;
    
    for (let i = 0; i < users.length; i++) {
      const u = users[i];
      if (u.username == username) {
        usernameExists = true;
        break;
      }
    }
  
    if (usernameExists) {
      userExistsErrorAlert.style.display = 'block';
      setTimeout(() => {
        userExistsErrorAlert.style.display = 'none';
      }, 6000);
    }
    else {
        var userId = 0;
        for (let i = 0; i < users.length; i++) {
          const u = users[i];
          if (u.id > userId) {
            userId = u.id;
          }
        }
        userId++;

        var user = {};
        user.id = userId;
        user.name = userfullname;
        user.phone = userPhone;
        user.username = username;
        user.password = password;

        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        userCreatedAlert.style.display = 'block';

        setTimeout(() => {
        userCreatedAlert.style.display = 'none';
        }, 1000);

        window.location.href = '/Project-github/login/login.html';

      }
}
  