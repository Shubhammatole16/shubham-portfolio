
//CUSTON POPUP MESSAGE BOX
function displayPopup(message) {
  var popupContainer = document.getElementById('popupContainer');
  var popupMessage = document.getElementById('popupMessage');
  var closeBtn = document.querySelector('.close-button');
  popupMessage.textContent = message;
  popupContainer.style.display = 'block';
  closeBtn.addEventListener('click', function() {
      popupContainer.style.display = 'none';
  });
}



// VALIDATION OF EMAIL AND MOBILE NUMBER
function validateForm() {
var email = document.getElementById("email").value;
var mobile = document.getElementById("phone").value;

if (!validateEmail(email)) {
  alert("Please enter a valid email address.");
  return false;
}
if (!validateMobileNumber(phone)) {
  alert("Please enter a valid mobile number.");
  return false;
}
return true;
}

function validateEmail(email) {
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email);
}

function validateMobileNumber(phone) {
var mobilePattern = /^\d{10}$/;
return mobilePattern.test(phone);
}