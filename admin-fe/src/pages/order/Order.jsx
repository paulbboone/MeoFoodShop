import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../redux/apiRequest";

const Order = () => {
    const [products, setProducts] = useState([]);
    const user = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    useEffect(() => {
      if (!user) {
        navigate("/login");
      }
      if (user?.accessToken) {
        getAllUser(user?.accessToken, dispatch);
      }
    });
   
    
    useEffect(() => {
        const fetchproducts = async() => {
            const {data} = await axios.get("https://server-api-guke.onrender.com/api/orders")
            setProducts(data);   
        }
        fetchproducts();
    }, []);
    console.log(products)

    return (
        <div>
                <table className="table table-light table-hover m-0 table-bordered">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Note</th>
                    <th>List of products</th>
                    <th>Total cost</th>
                    <th>Status</th>
                </tr>
                </thead>
                  <tbody>
                    {products.map((item, index) => {
                      return (
                        <tr key={index}>
                            <td>{item.User}</td>
                            <td>{item.fullName}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.address}  {item.district} {item.city}</td>
                            <td>{item.notes}</td>
                            <td>
                                {item.listProducts && item.listProducts.map((data, index) => (
                                    <tr>
                                        <td>
                                            <img
                                                src={data.productImage}
                                                style={{ height: "40px", width: "40px", marginRight: "20px"}}
                                                alt={data.title}
                                                />
                                            {data.name} ( {data.qty})
                                        </td>
                                    </tr>
                                ))}
                            </td>
                            <td>₫ {item.total.toLocaleString()}</td>
                            <td>
                               <tr className='d-flex justify-content-around'>
                                    <td className='btn btn-primary'>Confirm </td>
                                    <td className='btn btn-danger'>Cancel </td>
                               </tr>
                            </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
        </div>
    );
}

export default Order;
