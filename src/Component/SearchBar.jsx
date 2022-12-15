import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = ({ placeholder, data }) => {
  return (
    <div className='search'>
      <h1>Search
      </h1>
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="dataResult">
{data.map((value,key)=>{
  return <div>{value.title}</div>
})}


      </div>
    </div>
  );
};
