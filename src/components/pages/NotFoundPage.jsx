import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

import React from 'react'

const NotFoundPage = () => {
  return (
    <section class="text-center flex flex-col justify-center items-center h-96">
        
        <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This Page does not exist</p>
        <Link
          to="/index.html"
          className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md 
          px-3 py-2 mt-4"
          >
            Go Back</Link>

    </section>
  );
};

export default NotFoundPage;
