import React from 'react'
import './PriceListHeader.css'
import SearchBar from "../components/SearchBar";

const PriceListHeader = () => {

    const handleSearch = (label) => (query) => {
    console.log(`${label} search:`, query);
    };

  return (
    <div className="page-header">
        
        <div className="search-bars">
          <SearchBar placeholder="Search Article No..." onSearch={handleSearch("Article No")} />
          <SearchBar placeholder="Product..." onSearch={handleSearch("Product")} />
        </div>
        <div className="action-buttons">
          <div className="button-with-icon">
            <button className="p-button">New Product</button>
            <img src="/add-button.svg" className="p-image" />
          </div>
          <div className="button-with-icon">
            <button className="p-button">Print List</button>
            <img src="/print.svg" className="p-image" />
          </div>
          <div className="button-with-icon">
            <button className="p-button">Advanced Mode</button>
            <img src="/settings.svg" className="p-image" />
          </div>
        </div>

      </div>
  )
}

export default PriceListHeader