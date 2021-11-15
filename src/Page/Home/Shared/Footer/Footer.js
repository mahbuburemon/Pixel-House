import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faEnvelope} />
    const element2 = <FontAwesomeIcon icon={faMobile} />
    const element3 = <FontAwesomeIcon icon={faLocationArrow} />
    return (
        <>
            <div className="footer-all " collapseOnSelect expand="lg" >
                <div className=" footer bg-info text-black p-5" >
                    <div className="row ">
                        <div className="col-md-4">
                            <h2 className="footer-head fs-2">Pixel House</h2>
                            <div className="footer-p text-center">
                                <p className="p-2">Google Pixel is a brand of consumer electronic devices developed by Google that run either Chrome OS or the Android operating system. The Pixel brand was introduced in February 2013 with the first-generation Chromebook Pixel. The Pixel line includes laptops, tablets, and smartphones, as well as several accessories.</p>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <h2 className="footer-head fs-3">About Pixel House</h2>

                            <div className="footer-p p-2">
                                <ul>
                                    <li>About Us</li>
                                    <li>Our Team</li>
                                    <li>Careers </li>
                                    <li>Services </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <h2 className="footer-head fs-3">Contact Info</h2>
                            <div className="footer-p  text-start p-2">
                                <p><span className="contact-info">{element1} </span> mahbuburemon60@gmail.com</p>
                                <p> <span className="contact-info">{element2} </span> 01516762425</p>
                                <p> <span className="contact-info">{element3} </span> S/K Mannan road,Tongi-Gazipur</p>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <hr />
                            <h6 className="mt-3 p-2 text-center text-secondary ">Copyright © 2021 Mahbubur Rahman. All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;