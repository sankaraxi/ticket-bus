import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import calculateMonthlyBookings from '../utils/calculateMonthlyBookings';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userStats, setUserStats] = useState([]);
  const [monthlySummary, setMonthlySummary] = useState({});
  const [buses, setBuses] = useState([]);
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings'); // Adjust the API URL if necessary
        console.log(response);

        if (!response.ok) {
          throw new Error('Failed to fetch bus data');
        }

        const data = await response.json();
        const monthlyData = calculateMonthlyBookings(data);
  
        setMonthlySummary(monthlyData);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, []);
  console.log(monthlySummary);

  useEffect(() => {
    // Mock Data for Users
    const usersData = [
      { name: "Alice", ticketsBooked: 5 },
      { name: "Bob", ticketsBooked: 8 },
      { name: "Charlie", ticketsBooked: 3 },
    ];

    // Mock Data for Monthly Summary
    

    // Mock Data for Buses
    const busesData = [
      { name: "City Express", destination: "Erode", departureTime: "06:00 AM", price: 250 },
      { name: "Morning Star", destination: "Salem", departureTime: "07:30 AM", price: 475 },
      { name: "Sunset Journey", destination: "Trichy", departureTime: "08:00 PM", price: 1000 },
    ];

    // Mock Data for User History
    const historyData = [
      { userName: "Alice", busName: "City Express", date: "2024-12-01", seat: 2, price: 500 },
      { userName: "Bob", busName: "Morning Star", date: "2024-12-02", seat: 1, price: 475 },
      { userName: "Charlie", busName: "Sunset Journey", date: "2024-12-03", seat: 3, price: 3000 },
    ];

    setUserStats(usersData);
    // setMonthlySummary(monthlyData);
    setBuses(busesData);
    setUserHistory(historyData);
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  const totalTicketsBooked = userStats.reduce((acc, user) => acc + user.ticketsBooked, 0);
  const totalRevenue = userHistory.reduce((acc, history) => acc + history.price, 0);


  return (
    <div className="mt-32 mb-2 mx-44 bg-slate-300 p-10 rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Bus Ticket Booking Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">{userStats.length}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">Total Tickets Booked</h2>
          <p className="text-2xl font-bold">
            {userStats.reduce((acc, user) => acc + user.ticketsBooked, 0)}
          </p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">
            {'\u20B9'}
            {userHistory.reduce((acc, history) => acc + history.price, 0)}
          </p>
        </div>
      </div>

        {/* Monthly Summary Graph */}
        <div className="mb-6 bg-white p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Monthly Summary</h2>
        <Bar
          data={{
            labels: Object.keys(monthlySummary),
            datasets: [
              {
                label: 'Tickets Booked',
                data: Object.values(monthlySummary),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          }}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </div>

      {/* Available Buses */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Available Buses</h2>
        <table className="w-full bg-white border-collapse border border-gray-200 shadow-md">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Bus Name</th>
              <th className="border border-gray-300 p-2">Destination</th>
              <th className="border border-gray-300 p-2">Departure</th>
              <th className="border border-gray-300 p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{bus.name}</td>
                <td className="border border-gray-300 p-2">{bus.destination}</td>
                <td className="border border-gray-300 p-2">{bus.departureTime}</td>
                <td className="border border-gray-300 p-2">{'\u20B9'}{bus.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User History */}
      <div>
        <h2 className="text-xl font-semibold mb-4">User Purchase History</h2>
        <table className="w-full bg-white border-collapse border border-gray-200 shadow-md">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">User Name</th>
              <th className="border border-gray-300 p-2">Bus Name</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Seats</th>
              <th className="border border-gray-300 p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {userHistory.map((history, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{history.userName}</td>
                <td className="border border-gray-300 p-2">{history.busName}</td>
                <td className="border border-gray-300 p-2">{history.date}</td>
                <td className="border border-gray-300 p-2">{history.seat}</td>
                <td className="border border-gray-300 p-2">{'\u20B9'}{history.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
