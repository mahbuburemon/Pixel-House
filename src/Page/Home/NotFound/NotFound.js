import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/404 error.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '80%' }} src={notFound} alt="" />
            <br />
            <Link to="/home" ><button className="bg-danger border-3 border-danger rounded-3 p-2 m-5">Go Back</button></Link>
        </div>

    );
};

export default NotFound;