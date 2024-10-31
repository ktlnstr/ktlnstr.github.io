// Set the target date and time for the countdown
const targetDate = new Date("November 19, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time difference
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("timer-days").innerHTML = days;
    document.getElementById("timer-hours").innerHTML = hours;
    document.getElementById("timer-minutes").innerHTML = minutes;
    document.getElementById("timer-seconds").innerHTML = seconds;

    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Countdown Finished!";
    }
}, 1000);