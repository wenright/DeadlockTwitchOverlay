import logo from './logo.svg';
import { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

import Item from "./components/item";

import sampleResponse from "./data/sample_response.json";
import emptyResponse from "./data/empty_response.json";

import './App.css';
import findItems from './itemMatcher';

function App() {
  const [items, setItems] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const lastHoverTime = useRef(0);
  const model = useRef();

  useEffect(() => {
    setItems(emptyResponse);
    
    window.addEventListener('message', (event) => {
      // We'll request a frame from parent window, then it'll pass the image here.
      if (event.origin !== 'https://www.twitch.tv') {
        console.warn('child: unepected origin - ' + event.origin);
        return;
      }

      if (!model.current) {
        console.error('Model not yet loaded');
        return;
      }
      
      findItems(event.data, model)
        .then((items) => {
          setItems(items);
        });
    });

    tf.loadLayersModel('item_classifier_model/model.json').then((data) => {
      model.current = data;
    });
  }, []);

  const mouseEnter = () => {
    console.log('Hover');
    
    setIsHovered(true);

    // TODO targetOrigin
    window.parent.postMessage('requestFrame', '*');
    
    // TODO Debounce if running detection ends up being too expensive
    // lastHoverTime = 
  }

  const mouseLeave = () => {
    setIsHovered(false);
    console.log('unHover');
  }
  
  return (
    <div className="fixed bottom-0 left-0">
      {items ?
        <div className="flex mt-auto mr-auto text-sm transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 backdrop-blur"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}>
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
          Loading...
        </>
      }
    </div>
  );
}

export default App;
