let count = 0; // Initialize count to 0

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue() {
    if (count === 10) {
        alert("Your instagram post gained 10 followers! Gratz!")
    } else if (count === 20) {
        alert("Your instagram post gained 20 followers! Keep it up!")
    }
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

