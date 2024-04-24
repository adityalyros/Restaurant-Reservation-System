document.addEventListener("DOMContentLoaded", function() {
    // Sign Up
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        // Here you would implement the sign-up functionality, use API to register a new user
        console.log("Email:", email);
        console.log("Password:", password);
    });

    // Log In
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        // Here you would implement the log-in functionality, use API to log in
        console.log("Email:", email);
        console.log("Password:", password);
    });

    // User Profile
    const userInfo = document.getElementById("user-info");
    const reservations = document.getElementById("reservations");
    const profile = document.getElementById("profile");

    // Simulated user data
    const user = {
        id: 1,
        email: "john@example.com",
        first_name: "John",
        last_name: "Doe"
    };

    // Simulated reservations data
    const userReservations = [
        {
            id: 1,
            date: "2024-04-30",
            time: "19:00",
            guests: 4,
            status: "Confirmed"
        },
        {
            id: 2,
            date: "2024-05-02",
            time: "20:00",
            guests: 2,
            status: "Confirmed"
        }
    ];

    userInfo.innerHTML = `
        <p>Name: ${user.first_name} ${user.last_name}</p>
        <p>Email: ${user.email}</p>
    `;

    if (userReservations.length > 0) {
        let reservationHTML = "<ul>";
        userReservations.forEach(reservation => {
            reservationHTML += `
                <li>
                    <p>Date: ${reservation.date}</p>
                    <p>Time: ${reservation.time}</p>
                    <p>Guests: ${reservation.guests}</p>
                    <p>Status: ${reservation.status}</p>
                </li>
            `;
        });
        reservationHTML += "</ul>";
        reservations.innerHTML = reservationHTML;
    } else {
        reservations.innerHTML = "<p>No reservations found.</p>";
    }
});
