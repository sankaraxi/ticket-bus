import React, { useEffect } from 'react'

const HomeShimmer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mt-16 mb-2 mx-4 sm:mx-8 md:mx-16 lg:mx-44 bg-slate-100 p-6 sm:p-8 md:p-10 rounded-md animate-pulse">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gray-100 h-8 rounded-md w-3/4 sm:w-2/3 mx-auto"></h1>
        
            {/* Summary Cards Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-400 p-4 rounded shadow-md h-20"
                        ></div>
                    ))}
            </div>
        
            {/* Monthly Summary Graph Skeleton */}
            <div className="mb-6 bg-gray-300 p-6 rounded-md h-64"></div>
        
            {/* Available Buses Skeleton */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 bg-gray-300 h-6 rounded-md w-1/2 sm:w-1/4"></h2>
                <div className="bg-gray-300 h-32 rounded-md"></div>
            </div>
        
            {/* User History Skeleton */}
            <div>
                <h2 className="text-xl font-semibold mb-4 bg-gray-300 h-6 rounded-md w-1/2 sm:w-1/4"></h2>
                <div className="bg-gray-300 h-32 rounded-md"></div>
            </div>
        </div>
    );
}

export default HomeShimmer;
