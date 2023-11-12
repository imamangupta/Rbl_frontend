import React, { useState } from 'react';
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import { API_URL } from '../utils/constants';





export default function AddProduct(props) {
  const [product, setProduct] = useState({
    productId: '',
    manufacture: '',
    name: '',
    details: '',
    price: 0,
    MoQ: 0,
    MaxQ: 0,
    printer: '',
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === 'file') {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProduct({
          ...product,
          [name]: reader.result,
        });
      };

      reader.readAsDataURL(files[0]);
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare the request body
      const requestBody = {
        productId: product.productId,
        manufacture: product.manufacture,
        name: product.name,
        details: product.details,
        price: product.price,
        MoQ: product.MoQ,
        MaxQ: product.MaxQ,
        printer: product.printer,
        // Sending the image as base64
        image: product.image,
      };

      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Product added successfully');
        // You can redirect or perform any other action after success
        setProduct({ productId: '',
        manufacture: '',
        name: '',
        details: '',
        price: 0,
        MoQ: 0,
        MaxQ: 0,
        printer: '',
        image: null,})
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: 'center' }}>
        <SideNav  setHeadProgress={props.setProgress}/>
        <div className='main_contant_side'>
          <div style={{ padding: '20px' }}>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <div style={{ display: 'flex' }}>
                  <div className='add_product_container'>
                    <b>General Details</b>
                    <div className='table_aline_center'>
                      <label htmlFor="productId">Product ID:</label>
                      <input
                        className='set_search_input'
                        type="text"
                        id="productId"
                        name="productId"
                        value={product.productId}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='table_aline_center'>
                      <label style={{ color: 'blue' }} htmlFor="manufacture">Manufacture:</label>
                      <select
                        className='set_select_tag'
                        name="manufacture"
                        id="manufacture"
                        value={product.manufacture}
                        onChange={handleInputChange}
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                      </select>
                    </div>
                    <div className='table_aline_center'>
                      <label htmlFor="name">Name:</label>
                      <input
                        className='set_search_input'
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='table_aline_center display_sitting'>
                      <label htmlFor="details">Details:</label>
                      <textarea
                        className='set_search_input'
                        type="text"
                        id="details"
                        name="details"
                        value={product.details}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className='add_product_container'>
                    <b>Stock</b>
                    <div className='table_aline_center'>
                      <label htmlFor="price">Price:</label>
                      <input
                        className='set_search_input'
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='table_aline_center'>
                      <label htmlFor="MoQ">MoQ:</label>
                      <input
                        className='set_search_input'
                        type="number"
                        id="MoQ"
                        name="MoQ"
                        value={product.MoQ}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='table_aline_center'>
                      <label htmlFor="MaxQ">Max:</label>
                      <input
                        className='set_search_input'
                        type="number"
                        id="MaxQ"
                        name="MaxQ"
                        value={product.MaxQ}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='table_aline_center'>
                      <label style={{ color: 'blue' }} htmlFor="printer">Printer:</label>
                      <select
                        className='set_select_tag'
                        name="printer"
                        id="printer"
                        value={product.printer}
                        onChange={handleInputChange}
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                      </select>
                    </div>
                    <div className='table_aline_center'>
                      <label htmlFor="image">Image:</label>
                      <input
                        className='set_search_input'
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'end', padding: '1px 40px' }}>
                  <button type="submit" className='set_btn_col'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
