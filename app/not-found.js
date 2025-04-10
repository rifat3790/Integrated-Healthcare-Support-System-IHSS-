import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link className='text-2xl text-red-600 font-bold' href="/">Go back home page</Link>

        </div>
    );
};

export default notFound;