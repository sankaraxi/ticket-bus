import React, { useEffect } from 'react'

const BusShimmer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-28 mx-4 my-6 sm:mx-72">
        {/* <div className="flex flex-col justify-center items-center mb-6">
            <div className="bg-gray-300 animate-pulse h-8 w-48 rounded"></div>
            <div className="flex justify-center items-center mt-2">
            <div className="bg-gray-300 animate-pulse h-6 w-24 rounded"></div>
            </div>
        </div> */}

        {Array(3)
            .fill(0)
            .map((_, index) => (
            <div
                key={index}
                className="relative bg-gray-300 animate-pulse rounded-lg p-3 my-3"
            >
                <div className="flex items-center flex-row relative p-2">
                <div className="sm:w-9/12 flex flex-col m-4 p-4 justify-center">
                    <div className="bg-gray-300 animate-pulse h-6 sm:h-12 w-32 sm:w-72 rounded mb-4"></div>
                    <div className="bg-gray-300 animate-pulse h-6 sm:h-10 w-40 sm:w-60 rounded mb-4"></div>
                    <div className="bg-gray-300 animate-pulse h-6 sm:h-8 w-48 sm:w-72 rounded mb-2"></div>
                    <div className="bg-gray-300 animate-pulse h-6 sm:h-8 w-48 sm:w-72 rounded mb-4"></div>
                    <div className="bg-gray-300 animate-pulse h-6 sm:h-10 w-32 sm:w-48 rounded"></div>
                </div>
                <div className="w-44 h-44 sm:w-3/12 sm:h-56 bg-gray-300 animate-pulse rounded-md"></div>
                </div>
                <div className="absolute right-20 bottom-8 bg-gray-300 animate-pulse h-8 w-24 rounded"></div>
            </div>
            ))}
        </div>
    );
}

export default BusShimmer