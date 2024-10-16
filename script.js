
<script>
window.onload = () => {
    document.body.classList.remove('fade-out');
};

window.onbeforeunload = () => {
    document.body.classList.add('fade-out');
};



document.getElementById("contactForm").addEventListener ("submit"), function(event) 
  event.preventDefault();  
  

  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const messageElement = document.getElementById("message");
  const name  = document.getElementById("name").value;


  const emailIsValid = email && email.includes('@');
 
  const phoneIsValid = phone && phone.length >= 10;

  if (!emailIsValid) {
   
    messageElement.innerText = "Error: Email is required or is invalid.";
    messageElement.style.color = "red";
  } else if (!phoneIsValid) {
    
    messageElement.innerText = "Error: Phone number is required or is too short.";
    messageElement.style.color = "red";
  } else {
 
    messageElement.innerText = "Thank you! We will contact you soon.";
    messageElement.style.color = "green";
    

    document.getElementById("contactForm").reset();
  }

</script>