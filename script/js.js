var developer = document.getElementById("developer");
var mode = document.getElementById("mode");



// FUNCTION FOR DARK MODE
function myFunction() {
  clickSound.play();
  var element = document.body;
  element.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    developer.src = "files/developer.png";
    mode.src = "files/dark.png";
    mode.style.transform = "rotate(30deg)";
  } else {
    developer.src = "files/developer-dark.png";
    mode.src = "files/light.png";
    mode.style.transform = "rotate(0deg)";
  }
}




// FUNCTION FOR SCROLL TO SECTION
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}




// FUNCTION FOR DOWNLOAD RESUME
function downloadResume() {
  // Create savecv element
  const savecv = document.createElement("a");

  savecv.href = "files/Shubham_Matole_CV.pdf";
  savecv.download = "Shubham_Matole_CV.pdf";
  savecv.style.display = "none";

  // Trigger a click event  to initiate the download
  savecv.click();
}




//CUSTON POPUP MESSAGE BOX
function displayPopup(message) {
  var popupContainer = document.getElementById("popupContainer");
  var popupMessage = document.getElementById("popupMessage");
  var closeBtn = document.querySelector(".close-button");
  popupMessage.textContent = message;
  popupContainer.style.display = "block";
  closeBtn.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });
}




// EMAILJS LOBRARY TO SEND AN EMAIL
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    emailjs
      .send("service_sm1631", "template_a1q4ikp", formData)
      .then(function (response) {
        displayPopup(
          "Email Sent Successfully!\n Thank You For Contacing Me. \nI will get back to you soon."
        );
        document.getElementById("contactForm").reset();

        window.scrollTo(0, 0);
      })
      .catch(function (error) {
        console.error("Email sending failed:", error);
        displayPopup("Email Sending Failed. Please Try Again Later.");
      });
  });
