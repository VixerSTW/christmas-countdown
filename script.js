// Set the date for Christmas (e.g., December 25, 2024)
const countdownDate = new Date("December 25, 2024 00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerText = "Merry Christmas!";
    }
}, 1000);

// Add stars to the background
const body = document.body;
for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.width = Math.random() * 3 + 1 + "px"; // Randomize star size
    star.style.height = star.style.width; // Maintain aspect ratio
    star.style.animationDuration = Math.random() * 2 + 1 + "s"; // Randomize twinkle speed
    body.appendChild(star);
}
