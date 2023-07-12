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