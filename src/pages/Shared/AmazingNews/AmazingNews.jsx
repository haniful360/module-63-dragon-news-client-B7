import React from 'react';
import { Button } from 'react-bootstrap';
import './AmazingNews.css'

const AmazingNews = () => {
    return (
        <div className='background text-white px-3 py-5 mt-3 text-center'>
            <h3>Create an Amazing Newspaper</h3>
            <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button variant='danger'>Learn More</Button>
        </div>
    );
};

export default AmazingNews;