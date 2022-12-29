import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-dark fw-bold mb-4">About Meo Food Shop</h1>
                        <p className="lead mb-4">
                        
                        <br></br><hr></hr><br></br>
                        Meo Food Shop is a chain of stores specializing in providing quality, fresh and nutritious food for cats and pets.
                        <br></br><br></br>
                        Meo Food Shop was first established on September 15, 2022.
                        <br></br><hr></hr><br></br>
                        <h3>Meo Food Shop's criteria:</h3>
                        
                        <ol>
                            <li>Always provide quality goods, with the most competitive prices in the market.</li>
                            <li>Always listen to customers and give the most enthusiastic advice to bring comfort when shopping online.</li>
                            <li>With the motto of giving pets the best meal, we are constantly researching and improving the products we are distributing to meet the evolving needs of our pets.</li>
                            
                        </ol>

                        </p>
                        <NavLink to = "/contact" className= "btn btn-outline-dark px-3">Contact us</NavLink>
                    </div>
                    <div className="col-md-6">
                    <img src="/assets/About/catfoodbanner.jpg" alt="About Us"/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;