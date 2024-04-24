document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById("reservation-form");
    const availabilitySection = document.getElementById("availability");
    const availabilityStatus = document.getElementById("availability-status");
    const confirmReservationBtn = document.getElementById("confirm-reservation");

    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        document.getElementById("selected-date").innerText = date;
        document.getElementById("selected-time").innerText = time;
        document.getElementById("selected-guests").innerText = guests;

        // Simulated availability check
        const isAvailable = Math.random() < 0.5; // Simulated availability
        if (isAvailable) {
            availabilityStatus.innerText = "Reservation available for the selected date and time!";
            availabilityStatus.style.color = "green";
            confirmReservationBtn.classList.remove("hide");
        } else {
            availabilityStatus.innerText = "Sorry, reservation not available for the selected date and time.";
            availabilityStatus.style.color = "red";
            confirmReservationBtn.classList.add("hide");
        }

        availabilitySection.classList.remove("hide");
    });

    confirmReservationBtn.addEventListener("click", function() {
        // Simulated confirmation
        alert("Reservation confirmed!");
        // Here you would write code to confirm the reservation in the backend and store it
    });
});
