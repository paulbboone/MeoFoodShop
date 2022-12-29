import React from 'react';
import { NavLink, useParams } from 'react-router-dom';


const Home = () => {
    return (
        <div className="hero">
            <div className='text-center'>
                <br></br>
            <h3 className="h5 mb-4 text-gray">What is your 😻 food?</h3>
            </div>
            
            
            <div className="container py-5">
            <img src="./assets/Home/bannercatfood1.jpg" className="card-img" alt="Background"/>
             </div>
             <section className="pt-5 bg-warning">
                    <div className="row">
                            <div className="col-md-6 mb-10 mb-md-0">
                                <NavLink className="category-item text-black" to={'/products'}>
                                <img src="./assets/Home/img-catfood.png" className="card-img" alt="Background"/>
                                    
                                    <div className='text-center'>
                                     <h6 className="category-item-title text-gray">Dry Food</h6>
                                   
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-md-6 mb-10 mb-md-0">
                                <NavLink className="category-item mb-4 text-black" to={'/products'}>
                                <img src="./assets/Home/img-wetfood.png" className="card-img" alt="Background"/><br></br>
                                <div className='text-center'>
                                     <h6 className="category-item-title text-gray">Wet Food</h6>
                                   
                                    </div>
                                    
                                </NavLink>
                              
                            </div>
                         
                        </div>
                        </section>
                  
             <div className="card-img-overlay d-flex flex-column justify-content-center">
                    
                </div>
             
            </div>
            
            
       
    );
}

export default Home;
