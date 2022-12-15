import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export const SearchBar = ({ placeholder, data }) => {

  const [filterData, setfilterData] = useState([]);
  const [worldEnter, setworldEnter] = useState('');

  const handleFilter = e => {
    const searchWord = e.target.value;
    setworldEnter(searchWord);

    const newFilter = data.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setfilterData([]);
    } else {
      setfilterData(newFilter);
    }
  };

  const clearInput = () => {
    setfilterData([]);
    setworldEnter('');
  };

  return (
    <div className='search'>
      <h1>Search  </h1>
      <div className="searchInputs">

        <input type="text"
          placeholder={placeholder}
          value={worldEnter}
          onChange={handleFilter} />
          
        <div className="searchIcon" >
          {filterData.length === 0 && worldEnter.length < 1
            ? (<SearchIcon />)
            : (<CloseIcon id={'clearBtn'} onClick={clearInput} />)
          }
        </div>
      </div>

      {filterData.length != 0 && (
        <div className="dataResult">
          {filterData.slice(0, 15).map((value, key) => {
            return <a
              key={key}
              className='dataItem'
              href={value.link}
              target='_blank'
            >{value.title}</a>;
          })}
        </div>
      )}
    </div>
  );
};
