import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/p1.png';
import banner2 from '../../../images/Banner/p2.png';

const Banner = () => {
    return (
        <div>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: '100%', height: '550px' }}
                            src={banner1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{ width: '100%', height: '550px' }}

                            src={banner2}
                            alt="Second slide"
                        />
                    </Carousel.Item>


                </Carousel>
            </div>
        </div>
    );
};

export default Banner;