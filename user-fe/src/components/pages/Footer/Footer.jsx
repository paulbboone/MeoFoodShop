import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-secondary text-white">
            <div className="container py-4">
            <div className="row py-6">
                    <div className="col-md-4 mb-3 mb-md-0 ">
                        <h6 className="text-uppercase mb-3">Customer services</h6>
                        <ul className="list-unstyled mb-0">
                                <a className='text-black' href='https://www.facebook.com/'>Facebook</a>                  
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-uppercase mb-3">About</h6>
                        <ul className="list-unstyled mb-0">       
                        <NavLink className="nav-link text-black" to="about" >About Meo Food Shop</NavLink>              
                            
                        </ul>
                    </div>
            </div>
            </div>



                
            </footer>
        </div>
    );
}

export default Footer;
