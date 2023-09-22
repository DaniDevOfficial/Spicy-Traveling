import React from 'react';
import SearchIcon from '../../assets/icons/search.svg';
import '../../Styling/Searchbar.css';

export function Searchbar() {
  return (
    <div className="SearchContainer">
      <div className="SearchIconContainer">
      </div>
      <input
        className='Search'
        type="text"
        name="Search"
        required={true}
        placeholder="Search"
      />
      <input
        type="submit"
        className='SearchButton'
        value="Search"
      />
    </div>
  );
}
