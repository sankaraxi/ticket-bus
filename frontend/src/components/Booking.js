import React, { useEffect, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

const BookingPage = () => {
  const location = useLocation();
  const { bus } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    passengerName: '',
    departureDate: '',
    numberOfSeats: 1,
    seatPreference: 'Window',
  });

  if (!bus) return <p>No bus details available</p>;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const bookingData = {
      userName: formData.passengerName,
      busName: bus.name,
      busId: bus._id,
      date: formData.departureDate,
      price: bus.price * formData.numberOfSeats, // Total price based on seats
      seat: formData.numberOfSeats,
      destination: bus.destination,
      departureTime: bus.departureTime,
      arrivalTime: bus.arrivalTime,
      seatPreference: formData.seatPreference,
    };
  
    try {
      const response = await fetch('https://ticket-bus.onrender.com/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to book');
      }
  
      const result = await response.json();
      console.log(result);
      alert('Booking Successful');
      // Optionally, redirect the user to another page or clear the form
    } catch (error) {
      console.error(error);
      alert('Error booking the ticket');
    }
  };
  

  return (
    <div className="pt-20 sm:pt-28 mx-4 my-6 sm:mx-72">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">Booking for <span className='text-red-600'>{bus.name}</span></h1>
      <div className='w-full sm:px-44 flex max-sm:flex-col justify-between items-center'>
        <div className='flex flex-col items-center sm:items-start'>
          <h2 className='text-xl sm:text-2xl flex gap-1 items-center text-center'><span><IoLocationSharp /></span><span className='font-extrabold'>Coimbatore</span></h2>
          <p className='text-sm sm:text-lg font-semibold'>Departure Time: {bus.departureTime}</p>
        </div>
        <div className='max-sm:pt-3 flex flex-col items-center sm:items-end'>
          <h2 className='text-xl sm:text-2xl flex gap-1 items-center text-center'><span><FaLocationArrow /></span><span className='font-extrabold'>{bus.destination}</span></h2>
          <p className='text-sm sm:text-lg font-semibold'>Arrival Time: {bus.arrivalTime}</p>
        </div>
      </div>
      <div className='sm:px-72 flex justify-between'>
        
       
      </div>
      <p className='text-2xl sm:text-3xl text-center py-3'><span className='font-bold'>{'\u20B9'}{bus.price}</span><span> Per Ticket</span></p>
      <div className='sm:mx-44 bg-white'>
        <form className="p-10 bg-slate-200" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="passengerName">
              Passenger Name
            </label>
            <input
              type="text"
              id="passengerName"
              name="passengerName"
              value={formData.passengerName}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold" htmlFor="departureDate">
              Date of Departure
            </label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold" htmlFor="numberOfSeats">
              Number of Seats
            </label>
            <input
              type="number"
              id="numberOfSeats"
              name="numberOfSeats"
              value={formData.numberOfSeats}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              min="1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold" htmlFor="seatPreference">
              Seat Preference
            </label>
            <select
              id="seatPreference"
              name="seatPreference"
              value={formData.seatPreference}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            >
              <option value="Window">Window</option>
              <option value="Aisle">Aisle</option>
              <option value="No Preference">No Preference</option>
            </select>
          </div>
          <div className='flex items-center justify-center'>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Confirm Booking
            </button>

          </div>

         
        </form>
      </div>
      
    </div>
  );
};

export default BookingPage;
