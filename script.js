function getStarted() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function submitForm() {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message");

    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    message.textContent = "Thank you, " + name + "! Your form has been submitted successfully.";
    document.getElementById("name").value = "";
}