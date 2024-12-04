function calculateMonthlyBookings(bookings) {
    const monthNames = [
        "January", "February", "March", "April", "May", 
        "June", "July", "August", "September", 
        "October", "November", "December"
    ];

    const monthlyBookings = {};

    // Count bookings for each month
    bookings.forEach((booking) => {
        const bookingDate = new Date(booking.date);
        const monthIndex = bookingDate.getMonth(); // JavaScript months are 0-indexed
        const monthName = monthNames[monthIndex];

        // Increment the count for this month
        if (monthlyBookings[monthName]) {
            monthlyBookings[monthName]++;
        } else {
            monthlyBookings[monthName] = 1;
        }
    });

    // Create a sorted result in the correct month order
    const sortedBookings = {};
    monthNames.forEach((month) => {
        if (monthlyBookings[month]) {
            sortedBookings[month] = monthlyBookings[month];
        } else {
            sortedBookings[month] = 0; // Ensure all months are present, even with zero bookings
        }
    });

    return sortedBookings;
}

export default calculateMonthlyBookings;
