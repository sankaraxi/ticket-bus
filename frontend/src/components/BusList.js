import React, { useEffect, useState } from 'react';
import { CDN_URL } from '../utils/constants';

import { IoLocationSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import BusShimmer from './shimmer/BusShimmer';

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleBookNow = (bus) => {
    navigate('/booking', { state: { bus } });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch bus data from the backend using fetch API
    const fetchBuses = async () => {
      try {
        const response = await fetch('https://ticket-bus.onrender.com/api/buses'); // Adjust the API URL if necessary
        console.log(response);

        if (!response.ok) {
          throw new Error('Failed to fetch bus data');
        }

        const data = await response.json();
        console.log(data);
        setBuses(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, []);

  if (loading) return <BusShimmer/>;
  console.log(error);
  if (error) return <p>{error}</p>;

  return (
    <div className='pt-20 sm:pt-28 mx-4 my-6 sm:mx-72'>
      <div className="flex flex-col justify-center items-center">
          <h1 className="text-center font-palanquin font-bold text-3xl sm:text-4xl">Available Buses</h1>
          <div className="flex justify-center items-center mt-1 text-md sm:text-xl">
              <div className="mr-2">
                  <IoLocationSharp />
              </div>
              <p className="font-palanquin font-semibold ">Coimbatore</p>
          </div>
      </div>
            
      
      {buses.length === 0 ? (
        <p>No buses available</p>
      ) : (
        <>
          {buses.map((bus) => (
           <div
           className=" relative  bg-slate-300 rounded-lg p-3 my-3 hover:bg-slate-200 cursor-pointer" 
           key={bus?._id}
       >
           <div className="flex max-sm:flex-col max-sm:p-4 sm:items-center flex-row relative p-2"> 
              
                

               <div className="sm:w-9/12 flex flex-col sm:m-4 sm:p-4">
                   <h2 className="text-4xl sm:text-6xl font-poppins pb-4 font-semibold">{bus?.name}</h2>
                   <h4 className="flex gap-2 text-2xl items-center text- sm:text-3xl pb-4 font-palanquin "><span><FaLocationArrow /></span> <span className='font-bold'>{bus?.destination}</span></h4>
                    <h4 className="text-md sm:text-xl font-palanquin "><span className='font-semibold'>Departure Time:</span> <span className='font-bold'>{bus?.departureTime}</span></h4>
                    <h4 className="text-md sm:text-xl sm:pb-4 font-palanquin "><span className='font-semibold'>Arrival Time:</span> <span className='font-bold'>{bus?.arrivalTime}</span></h4>
                    <h4 className="text-md max-sm:pb-2 max-sm:text-right text-3xl sm:text-3xl font-extrabold font-palanquin ">{'\u20B9'} {bus?.price}</h4>
               </div>
               <div className='flex gap-1 flex-col items-center justify-center sm:w-4/12'>
                  <img className="w-full h-60  object-cover object-center rounded-md"
                      src={CDN_URL + bus?.image_id}
                      alt="bus-item"
                  />
                    <button 
                      className="border border-solid border-transparent w-full bg-red-500 text-white p-2 px-7 rounded-md" key={bus?._id}
                        onClick={() => handleBookNow(bus)}
                      >
                          <div className='' >
                              <h4 className='text-sm sm:text-lg'>
                                  Book Now
                              </h4>
                          </div>    
                  </button>

               </div>

               

             
           </div>
             
           
           
       </div>  
          ))}
        </>
      )}
    </div>
  );
};

export default BusList;
