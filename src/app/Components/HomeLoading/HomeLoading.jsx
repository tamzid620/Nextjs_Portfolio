import React, { useEffect, useState } from 'react';
import './HomeLoading.css'

const HomeLoading = () => {

    const [expand, setExpand] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExpand(true);
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='htmlBody'>
            <div className={`loading-container ${expand ? 'expand' : ''}`}>
                <div className="loading-line" />
            </div>
        </div>
    );
};

export default HomeLoading;