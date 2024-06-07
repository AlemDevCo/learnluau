console.log("Welcome to Learn Luau!");

// Initialize percent and clickedClasses in localStorage if they don't exist
if (localStorage.getItem("percent") === null) {
    localStorage.setItem("percent", 0);
}
if (localStorage.getItem("clickedClasses") === null) {
    localStorage.setItem("clickedClasses", JSON.stringify([]));
}

function updateProgressAndRedirect(url, className) {
    // Get current percent value
    let percent = parseInt(localStorage.getItem("percent"));

    // Get current clicked classes
    let clickedClasses = JSON.parse(localStorage.getItem("clickedClasses"));

    // Check if className is already in the clickedClasses array
    if (!clickedClasses.includes(className)) {
        // Increment percent value by 1
        percent += 10;

        // Add className to clickedClasses array
        clickedClasses.push(className);

        // Save the new percent value and clickedClasses to localStorage
        localStorage.setItem("percent", percent);
        localStorage.setItem("clickedClasses", JSON.stringify(clickedClasses));

        // Update the progress bar width
        document.getElementById('progress-bar').style.width = percent + '%';

        // Add completed class to the clicked element
        document.getElementById(className).classList.add('completed');
    }

    // Redirect to the specified URL
    window.location.href = url;
}

// Update the progress bar width on page load
document.getElementById('progress-bar').style.width = localStorage.getItem("percent") + '%';

// Add completed class to already clicked classes on page load
let clickedClasses = JSON.parse(localStorage.getItem("clickedClasses"));
clickedClasses.forEach(className => {
    document.getElementById(className).classList.add('completed');
});
