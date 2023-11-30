function generatePDF() {
    var element = document.getElementById('myForm');
    html2pdf(element);
}
function generateResume() {
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var mob = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pin").value;
    var country = document.getElementById("country").value;

    // Display values in template
    localStorage.setItem('fname',fn);
    localStorage.setItem('lname',ln);
    localStorage.setItem('mobile',mob);
    localStorage.setItem('email',email);
    localStorage.setItem('input[name="gender"]:checked',gender);
    localStorage.setItem('city',city);
    localStorage.setItem('pin',pincode);
    localStorage.setItem('country',country);

    localStorage.setItem(".profiletext h2").innerText = fn + " " + ln;
    localStorage.setItem(".contactinfo li:nth-child(1) .text").innerText = mob;
    localStorage.setItem(".contactinfo li:nth-child(2) .text").innerText = email;
    localStorage.setItem(".contactinfo li:nth-child(3) .text").innerText = "website"; // Add your website value here
    localStorage.setItem(".contactinfo li:nth-child(4) .text").innerText = "address"; // Add your address value here

    // Add more fields as needed
    window.location.href = 'index2.html';
}