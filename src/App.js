import logo from './logo.svg';
import { useState, useEffect } from 'react';

import Item from "./components/item";

import sampleResponse from "./data/sample_response.json";

import './App.css';

function App() {
  console.log('App loaded! 573281704327104327105');

  let [items, setItems] = useState();

  useEffect(() => {
    // Fetch stream items here
    setItems(sampleResponse);
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        {items ?
          <div className="flex mt-auto mr-auto opacity-100 transition-opacity ease-in-out duration-200">
            {Object.entries(items).map(([slot, items]) => (
              <div className={"flex flex-wrap w-[144px] h-[144px] m-1 relative"} key={slot}>
                {items.map((item_name, j) => (
                  <Item name={item_name} slot={slot} key={j} />
                ))}
              </div>
            ))}
          </div>
          :
          <>
            Loading...123
          </>
        }
      </header>
    </div>
  );
}

export default App;
