import React, { useEffect, useState } from 'react';
import { CDN_URL } from '../utils/constants';

import { IoLocationSharp } from "react-icons/io5";

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch bus data from the backend using fetch API
    const fetchBuses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/buses'); // Adjust the API URL if necessary
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

  if (loading) return <p>Loading buses...</p>;
  console.log(error);
  if (error) return <p>{error}</p>;

  return (
    <div className=' mx-4 my-6 sm:mx-56  sm:my-9'>
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
           className=" relative  bg-slate-100 rounded-lg p-3 my-3 hover:bg-slate-200 cursor-pointer" 
           key={bus?._id}
       >
           <div className="flex items-center flex-row relative p-2"> 
               <img className="w-36 h-36 sm:w-3/12 sm:h-56 object-cover object-center rounded-lg"
                   src={CDN_URL + bus?.image_id}
                   alt="food-item"
               />
                

               <div className="sm:w-9/12 flex flex-col m-4 p-4 justify-center">
                   <h2 className="text-md sm:text-3xl font-poppins font-semibold">{bus?.name}</h2>
                   <h4 className="text-md sm:text-lg font-palanquin ">{'\u20B9'} {bus?.price}</h4>
                   <h4 className="text-md sm:text-lg font-palanquin "> {bus?.destination}</h4>
                    <h4 className="text-md sm:text-lg font-palanquin "> {bus?.departureTime}</h4>
                    <h4 className="text-md sm:text-lg font-palanquin "> {bus?.arrivalTime}</h4>
               </div>

             
           </div>
             
           {/* <button 
               className="absolute left-1 bottom-3 border border-solid border-transparent bg-orange-100 text-black p-2 ml-2 rounded-lg" key={item.card.info.id}
               onClick={() => handleAddItems(item)}
               > */}
                   {/* <div className='' > */}
                       {/* <h4 className='text-sm sm:text-lg'> */}
                           {/* Add <span> <FontAwesomeIcon icon={faPlus} /></span> */}
                       {/* </h4> */}
                   {/* </div>     */}
           {/* </button>   */}
           
       </div>  
          ))}
        </>
      )}
    </div>
  );
};

export default BusList;
