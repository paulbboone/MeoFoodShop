import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../redux/apiRequest";


const Edit = () => {
  const {id} = useParams();
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
    const fetchproducts = async () => {
      const { data } = await axios.get(
        `https://server-api-guke.onrender.com/api/products/${id}`
      );
      setProducts(data);
    };
    fetchproducts();
  }, [id]);

  const updateProduct = (_id) => async () => {
    try {
      await axios.put(
        `https://server-api-guke.onrender.com/api/update/${_id}`, products
      );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successfully!',
        showConfirmButton: false,
        timer: 900
      })
      navigate('/product')
      // setTimeout(() => window.location.reload(false), 1000);
    } catch {
      swal({
        title: "Failed!",
        icon: "error",
        button: false
      });
    }
  };

  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(products)
  return (
    <div>
       <div class="mb-3 col-md-5 mx-auto">
        <label for="text">Name</label>
        <input type="text" class="form-control" id="title" name='title' placeholder="" onChange={handleChange} value={products.title || ''} />
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="number">Price</label>
        <input type="number" class="form-control" id="price" name='price' placeholder=""  onChange={handleChange} value={products.price || ''}/>
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="text">Type</label>
          <select class="custom-select d-block w-100" id="category" name='category' required=""  onChange={handleChange} value={products.category || ''}>
            
            <option>Dry Food</option>
            <option>Wet Food</option>
            
          </select>
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="text">Discription</label>
        <textarea type="text" class="form-control" id="description" rows="7" name='description' placeholder="" onChange={handleChange} value={products.description || ''}/>
      </div>
      <div class="mb-3 col-md-1 mx-auto">
        <button onClick={updateProduct(products._id)}>Add </button>
      </div>
    </div>
  );
}

export default Edit;
