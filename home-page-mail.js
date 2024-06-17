const urlParams = new URLSearchParams(window.location.search);
const flagValue = urlParams.get('emailSuccess');

if (flagValue === 'true') {
    document.getElementById("mail-message").innerHTML = "Mail sent successfully to MagicalSpaces.";
    document.querySelector(".mail-success-box").style.display = "flex";
    // $("body").css("overflow", "hidden");
} else if (flagValue === 'false') {
    document.getElementById("mail-message").innerHTML = "Mail Failed sent successfully to MagicalSpaces.";
    document.querySelector(".mail-success-box").style.display = "flex";
    $("body").css("overflow", "hidden");
}

// Get the current URL without the query parameters
const baseUrl = window.location.href.split('?')[0];

// Replace the current state with a new state without the query parameters
history.replaceState(null, null, baseUrl);