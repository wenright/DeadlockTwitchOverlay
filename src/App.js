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

    window.addEventListener('message', (message) => {
      console.log('Message recieved o7');
      console.log(message);
    });
  }, []);
  
  return (
    <div className="fixed bottom-0 left-0">
      {items ?
        <div className="flex mt-auto mr-auto text-sm transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
          {Object.entries(items).map(([slot, items]) => (
            <div className={"grid grid-cols-2 gap-0.5 lg:gap-1 m-1 lg:m-2 relative"} key={slot}>
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
    </div>
  );
}

export default App;
