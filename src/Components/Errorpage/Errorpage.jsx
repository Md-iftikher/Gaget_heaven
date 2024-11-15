import React from 'react';

const Errorpage = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-400">404</h1>
        <p className="mt-4 text-3xl font-semibold text-gray-800 dark:text-white">Oops! Page not found</p>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Go back home
        </a>
      </div>
    </section>
    );
};

export default Errorpage;