let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function openImg() {
  var image = document.getElementById("image");
  var source = image.src;
  window.open(source);
}

let upto = 10555;
let counts = setInterval(updated, 10);

function updated() {
  let count = document.getElementById("counter");
  count.innerHTML = ++upto;
  if (upto === 11068) {
    clearInterval(counts);
  }
}


//VALIDATE
function validateForm() {
    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const inquiry = document.getElementById("cinquiry").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const inquiryError = document.getElementById("inquiry-error");

    nameError.textContent = "";
    emailError.textContent = "";
    inquiryError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "Name cannot be left blank or contain numbers.";
        isValid = false;
    }

    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (inquiry === "") {
        inquiryError.textContent =
            "Please provide a detailed inquiry. E.g. Partnerships, sponsorships, job applications, internships, research, etc.";
        isValid = false;
    }

    if (isValid) {
        window.location.href = "/success.html";
    }

    return false; // Prevent default form submission
}




//function validateForm() {
//    const name = document.getElementById("cname").value;
//    const email = document.getElementById("cemail").value;
//    const password = document.getElementById("cpassword").value;
//    const inquiry = document.getElementById("cinquiry").value;
  
//    const nameError = document.getElementById("name-error");
//    
//    const emailError = document.getElementById(
//        "email-error"
//    );
//    const passwordError = document.getElementById(
//        "password-error"
//    );
//    const inquiryError = document.getElementById(
//        "inquiry-error"
//    );
//    const agreeError = document.getElementById(
//        "agree-error"
//    );

//    nameError.textContent = "";
//    emailError.textContent = "";
//    inquiryError.textContent = "";

//    let isValid = true;

//    if (name === "" || /\d/.test(name)) {
//        nameError.textContent =
//            "Name cannot be left blank.";
//        isValid = false;
//    }

//    if (email === "" || !email.includes("@")) {
//        emailError.textContent =
//            "Email address is invalid.";
//        isValid = false;
//    }

//    if (inquiry === "") {
//        inquiryError.textContent =
//            "Provide a detailed business inquiry. E.g. Partnerships, sponsorships, job applications, internships, research, etc.";
//        isValid = false;
//    }
//
//    return isValid;
//}
//
















// A VALIANT ATTEMPT:
//   document.getElementById("navi").innerHTML =
//  '<ul id="navi">'+
//    '<li><a href="/index.html">Home</a></li>'+
//    '<li><a href="/courses.html">Courses</a></li>'+
//    '<li><a href="/forums.html">Forums</a></li>'+
//    '<li><a href="/info.html">Info</a></li>'+
//    '<li><a class="active" href="/contact.html">Contact Us</a></li>'+
//  '</ul>';