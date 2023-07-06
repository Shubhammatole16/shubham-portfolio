

//SEND AN EMAIL USING EAMIL JS
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };
emailjs.send('service_sm1631', 'template_a1q4ikp', formData)   
    .then(function(response) {
        console.log('Email sent successfully!', response);
        displayPopup('Email Sent Successfully!\n Thank You For Contacing Me.\n I will get back to you soon.');
        document.getElementById('contactForm').reset();
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 3000);
    })
    .catch(function(error) {
        console.error('Email sending failed:', error);
        displayPopup('Email Sending Failed. Please Try Again Later.');
    });
});


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