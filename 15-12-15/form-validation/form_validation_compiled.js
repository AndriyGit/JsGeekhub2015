'use strict';

var errors = [],
    message = '';

submitRegistration.addEventListener('click', validate);

function validate(e) {
  errors = [];

  validateLogin();
  validatePassword();
  validateEmail();
  validatePhone();

  if (errors.length > 0) {
    e.preventDefault();
    var errorsList = document.getElementsByClassName('errors-list')[0];
    errorsList.innerText = errors.join('\n');
    errorsList.parentNode.style.display = 'block';
  } else {
    document.getElementsByClassName('alert-danger')[0].style.display = 'none';
    alert('Congratulations! You filled all fields correctly!');
  }
}

function validateLogin() {
  var loginLength = login.value.length;
  if (!betweenOrEqual(loginLength, 3, 16)) {
    message = 'You provided incorrect login. Please make sure your login length between 3 and 16 symbols.';
    addError(message, login);
  }
}

function validatePassword() {
  var reg = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  var strength = reg.exec(password.value);

  if (strength !== null && betweenOrEqual(password.value.length, 8, 30)) {
    if (password.value !== confirmPassword.value) {
      addError('The passwords you entered do not match', password, confirmPassword);
    }
  } else {
    message = 'Your password should contain at least 1 capital, 1 small letters and 1 number. The length of your password should be between 8 and 30 characters.';
    addError(message, password, confirmPassword);
  }
}

function validateEmail() {
  var reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  var checkingResult = reg.exec(email.value);
  if (checkingResult === null) {
    addError('You entered incorrect email address', email);
  }
}

function validatePhone() {
  var reg = /^\(?([0-9]{2})\)?-?([0-9]{3})-?([0-9]{2})-?([0-9]{2})$/;
  var checkingResult = reg.exec(phone.value);
  if (checkingResult === null) {
    addError("You entered incorrect phone number. Please provide 9 numbers. Mask is (xx)-xxx-xx-xx. You can omit '()' and '-'", phone);
  }
}

function betweenOrEqual(x, min, max) {
  return x >= min && x <= max;
}

function addError(message, field, duplicateField) {
  errors.push(message);
  field.parentNode.parentNode.className += ' has-error';
  if (duplicateField !== undefined) duplicateField.parentNode.parentNode.className += ' has-error';
}
