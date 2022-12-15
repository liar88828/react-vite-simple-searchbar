import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = ({ placeholder, data }) => {

  const [filterData, setfilterData] = useState([]);

  const handleFilter = e => {
    const searchWord = e.target.value;
    const newFilter = data.filter(value => {
      return value.title.includes(searchWord);
    });

    setfilterData(newFilter);
  };

  return (
    <div className='search'>
      <h1>Search
      </h1>
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className="searchIcon" >
          <SearchIcon />
        </div>
      </div>
      {
        filterData.length != 0 && (


          <div className="dataResult">
            {filterData.map((value, key) =>; {
              return <a
                key={key}
                className='dataItem'
                href={value.link}
                target='_blank'
              >{value.title}</a>;
            })}


          </div>
        )
      }

    </div>
  );
};
