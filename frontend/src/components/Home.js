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
import { useNavigate } from 'react-router-dom';
import HomeShimmer from './shimmer/HomeShimmer';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userStats, setUserStats] = useState([]);
  const [monthlySummary, setMonthlySummary] = useState({});
  const [bookingData, setBookingData] = useState([]);
  const [buses, setBuses] = useState([]);
  const [userHistory, setUserHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch User Data
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://ticket-bus.onrender.com/api/users'); // Adjust the API URL if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserStats(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    const fetchBooking = async () => {
      try {
        const response = await fetch('https://ticket-bus.onrender.com/api/bookings'); // Adjust the API URL if necessary

        if (!response.ok) {
          throw new Error('Failed to fetch bus data');
        }

        const data = await response.json();
        console.log(data);
        setBookingData(data);
        const monthlyData = calculateMonthlyBookings(data);
  
        setMonthlySummary(monthlyData);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    fetchBooking();
  }, []);
  console.log(monthlySummary);

  useEffect(() => {

    const busesData = [
      { name: "City Express", destination: "Erode", departureTime: "06:00 AM", price: 500 },
      { name: "Morning Star", destination: "Salem", departureTime: "07:30 AM", price: 475 },
      { name: "Sunset Journey", destination: "Trichy", departureTime: "08:00 PM", price: 1000 },
    ];

    // Mock Data for User History
    const historyData = [
      { userName: "Kumar", busName: "City Express", date: "2024-12-01", seat: 2, price: 500 },
      { userName: "Pradeep", busName: "Morning Star", date: "2024-12-02", seat: 1, price: 475 },
      { userName: "Charlie", busName: "Sunset Journey", date: "2024-12-03", seat: 3, price: 3000 },
    ];

    // setMonthlySummary(monthlyData);
    setBuses(busesData);
    setUserHistory(historyData);
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  const handleBookNow = () => {
    navigate('/buses');
  }

  if (loading) return <p className='pt-30'><HomeShimmer/></p>;
  console.log(error);
  if (error) return <p>{error}</p>;


  return (
    <div className="mt-20 sm:mt-32 sm:mb-2 sm:mx-44 bg-slate-300 p-10 rounded-md">
      <h1 className="text-4xl font-bold mb-6 text-center">Ticket Bus <span className='text-red-500'>Dashboard</span></h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">{bookingData.length}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">Total Tickets Booked</h2>
          <p className="text-2xl font-bold">
            {bookingData.reduce((acc, bookingData) => acc + (Number(bookingData?.seat) || 0), 0)}
          </p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">
            {'\u20B9'}
            {bookingData.reduce((acc, bookingData) => acc + bookingData.price, 0)}
          </p>
        </div>
      </div>

      {/* Monthly Summary Graph */}
      <div className="mb-6 bg-white p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Monthly Summary</h2>

        <div className="overflow-x-auto">
          {/* Add a height style to the wrapper for consistent graph size */}
          <div className="min-w-[600px] h-[300px] sm:h-[400px]">
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
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
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
        <div className='flex items-center justify-center pt-4'>
          <button 
                className="border border-solid border-transparent bg-red-500 text-white p-2 px-7 ml-2 rounded-md"
                  onClick={() => handleBookNow()}
                >
                    <div className='' >
                        <h4 className='text-sm sm:text-lg'>
                            Book Now
                        </h4>
                    </div>    
            </button>  
        </div>
      </div>

      {/* User History */}
      <div>
        <h2 className="text-xl font-semibold mb-4">User Purchase History</h2>
        <div className="overflow-x-auto w-full">
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
              <tr>
                <td className="border border-gray-300 p-2">{bookingData[bookingData.length - 1]?.userName}</td>
                <td className="border border-gray-300 p-2">{bookingData[bookingData.length - 1]?.busName}</td>
                <td className="border border-gray-300 p-2">
                  {new Date(bookingData[bookingData.length - 1]?.date)
                    .toLocaleDateString('en-GB')
                    .replace(/\//g, '-')}
                </td>
                <td className="border border-gray-300 p-2">{bookingData[bookingData.length - 1]?.seat}</td>
                <td className="border border-gray-300 p-2">{'\u20B9'}{bookingData[bookingData.length - 1]?.price}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">{bookingData[bookingData.length - 2]?.userName}</td>
                <td className="border border-gray-300 p-2">{bookingData[bookingData.length - 2]?.busName}</td>
                <td className="border border-gray-300 p-2">
                  {new Date(bookingData[bookingData.length - 2]?.date)
                    .toLocaleDateString('en-GB')
                    .replace(/\//g, '-')}
                </td>
                <td className="border border-gray-300 p-2">{bookingData[bookingData.length - 2]?.seat}</td>
                <td className="border border-gray-300 p-2">{'\u20B9'}{bookingData[bookingData.length - 2]?.price}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">{bookingData[bookingData.length - 3]?.userName}</td>
                <td className="border border-gray-300 p-2">{bookingData[bookingData.length - 3]?.busName}</td>
                <td className="border border-gray-300 p-2">
                  {new Date(bookingData[bookingData.length - 3]?.date)
                    .toLocaleDateString('en-GB')
                    .replace(/\//g, '-')}
                </td>
                <td className="border border-gray-300 p-2">{bookingData[bookingData.length - 3]?.seat}</td>
                <td className="border border-gray-300 p-2">{'\u20B9'}{bookingData[bookingData.length - 3]?.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Home;
