import React, { useEffect, useState } from "react";
import "./Pricelist.css";
import axios from "axios";

import PriceListHeader from "../components/PriceListHeader";
const Button = ({ onClick, children }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
}

const PriceList = () => {
  const [data, setData] = useState([]);

  const handleChange = (id, field, value) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [field]: value } : item)
    setData(updatedData);
  };

  useEffect(() => {
    tableData();
  }, []);


  const tableData = () => {

    axios.get('https://lattfaktura.onrender.com/priceList')
      .then(response => {
        setData(response.data);
      })
  }

  const handleSave = async (id) => {
    const row = data.find((item) => item.id === id);
    try {
      const response = await axios.post(`https://lattfaktura.onrender.com/priceList/${id}`, row);
      console.log('Item updated:', response.data);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://lattfaktura.onrender.com/priceList/${id}`);
      setData(data.filter((item) => item.id !== id));
      console.log('Item deleted');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  return (
    <div className="price-list-page">
      <PriceListHeader />
      <div className="table-container">
        <table className="price-table">
          <thead className="table-header">
            <tr>
              <th>Article No</th>
              <th>Product/Service</th>
              <th>In Price</th>
              <th>Price</th>
              <th>Unit</th>
              <th>Stock</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} >
                <td className="table-row"><input value={item.articleNo} onChange={(e) => handleChange(item.id, "articleNo", e.target.value)} /></td>
                <td className="table-row"><input value={item.productName} onChange={(e) => handleChange(item.id, "productName", e.target.value)} /></td>
                <td className="table-row"><input value={item.inPrice} onChange={(e) => handleChange(item.id, "inPrice", e.target.value)} /></td>
                <td className="table-row"><input value={item.price} onChange={(e) => handleChange(item.id, "price", e.target.value)} /></td>
                <td className="table-row"><input value={item.unit} onChange={(e) => handleChange(item.id, "unit", e.target.value)} /></td>
                <td className="table-row"><input value={item.inStock} onChange={(e) => handleChange(item.id, "inStock", e.target.value)} /></td>
                <td className="table-row"><input value={item.description} onChange={(e) => handleChange(item.id, "description", e.target.value)} /></td>
                <td className="update"><button className="icon-button" onClick={() => handleSave(item.id)}><img className="icon-img" src="/updated.png" alt="Update"/></button></td>
                <td className="update"><button className="icon-button" onClick={() => handleDelete(item.id)}><img className="icon-img"  src="/delete.png" alt="Delete"/></button></td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
     
    </div>
  );
};

export default PriceList;
