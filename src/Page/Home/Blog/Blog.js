import React from 'react';
import { Button } from 'react-bootstrap';
import pixel from '../../../images/666pro.jpg'

const Blog = () => {
    return (
        <div className="container ">

            <div className=" row gx-2 row-cols-md-2 row-cols-lg-2 row-cols-sm-1 p-3 m-5 ">
                <div className="col col-md-12 col-lg-6 " >
                    <img className="p-3" style={{ height: "300px", width: "100%" }} src={pixel} alt="" />


                </div>

                <div className="col p-2 col-md-12 col-lg-6">
                    <h2>More personal, more powerful: Meet Pixel 6 and Pixel 6 Pro</h2>
                    <p className="m-3 p-3">Pixel 6 and Pixel 6 Pro are powered by Google Tensor, Google’s first-ever processor, and they ship with the new Android 12.

                    </p>

                    <span >  <Button variant="outline-secondary">Read Artical</Button>
                    </span>
                </div>



            </div>
        </div>
    );
};

export default Blog;