import { useState } from 'react';
import './App.css';
import { SearchBar } from './Component/SearchBar';
import BookData from './Data.json';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SearchBar
        placeholder='enter a Ebook'
        data={BookData} />
    </div>
  );
}

export default App;
