// JavaScript code
document.getElementById("send-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var form = document.getElementById("email-form");
    var messageContainer = document.getElementById("modal-message");
  
    var formData = new FormData(form);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = xhr.responseText;
          
          if (response === "success") {
            form.reset(); // Clear the form inputs
            messageContainer.innerHTML = "<p class='success-message'>Email sent successfully!</p>"; // Update modal content
          } else {
            messageContainer.innerHTML = "<p class='error-message'>Error occurred while sending email.</p>"; // Update modal content
          }
  
          messageContainer.classList.remove("is-hidden"); // Show the message
        } else {
          console.error("Error: " + xhr.status);
        }
      }
    };
    
    xhr.send(formData);
  });
  