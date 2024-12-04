function calculateMonthlyBookings(bookings) {
    const monthlyBookings = {};

    bookings.forEach((booking) => {
        // Extract the year and month from the booking date
        console.log(booking);
        const bookingDate = new Date(booking.date);
        const year = bookingDate.getFullYear();
        const month = bookingDate.getMonth() + 1; // JavaScript months are 0-indexed

        // Create a key for the year and month (e.g., "2024-12")
        const yearMonthKey = `${year}-${month.toString().padStart(2, '0')}`;

        // Increment the count for this year and month
        if (monthlyBookings[yearMonthKey]) {
            monthlyBookings[yearMonthKey]++;
        } else {
            monthlyBookings[yearMonthKey] = 1;
        }
    });

    return monthlyBookings;
}

export default calculateMonthlyBookings;