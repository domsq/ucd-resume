function sendMail(contactForm) {
    emailjs.send("service_8iztgl9", "template_5jxcs0k", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("ERROR!", error)
        }
    );

    contactForm.name.value = "";
    contactForm.emailaddress.value = "";
    contactForm.projectsummary.value = "";
    
    alert("Thanks! I'll be in touch soon.")

    return false;
}