import { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

import Item from "./components/item";
import "./hooks/useThrottle";

import emptyResponse from "./data/empty_response.json";

import './App.css';
import findItems from './itemMatcher';
import useThrottle from './hooks/useThrottle';

function App() {
  const [items, setItems] = useState(emptyResponse);
  const [isHovered, setIsHovered] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const model = useRef<tf.LayersModel>();
  const recognitionThrottle = useThrottle(300);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const messageHandler = (event: { origin: string; data: any; }) => {
      // We'll request a frame from parent window, then it'll pass the image here.
      if (event.origin !== 'https://www.twitch.tv') {
        console.warn('child: unepected origin - ' + event.origin);
        return;
      }

      if (!model.current) {
        console.error('Model not yet loaded');
        return;
      }

      recognitionThrottle(() => {
        findItems(event.data, model)
          .then((data) => {
            setItems(data.items);
          });
      });
    };
    
    window.addEventListener('message', messageHandler);

    tf.loadLayersModel('item_classifier_model/model.json').then((data) => {
      model.current = data;
    });

    return () => {
      window.removeEventListener('message', messageHandler);
    }
  }, [recognitionThrottle]);

  const mouseEnter = () => {
    setIsHovered(true);
    setShowWelcomeMessage(false);

    window.parent.postMessage('requestFrame', '*');
  }

  const mouseLeave = () => {
    setIsHovered(false);
  }
  
  return (
    <div className="fixed bottom-0 left-0">
      {items ?
        <>
          {!isHovered && showWelcomeMessage &&
            <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center p-2 border-2 rounded pointer-events-none animate-pulse border-zinc-300'>
              <p className='block w-full text-center text-zinc-500'>view item details</p>
            </div>
          }

          <div className="relative flex mt-auto mr-auto text-sm transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 backdrop-blur"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}>
            {Object.entries(items).map(([slot, items]) => (
              <div className={"grid grid-cols-2 gap-0.5 lg:gap-1 m-1 lg:m-2 relative"} key={slot}>
                {items.map((item_name, j) => (
                  <Item name={item_name} slot={slot} key={slot + item_name + j} />
                ))}
              </div>
            ))}
          </div>
        </>
        :
        <>
          Loading...
        </>
      }
    </div>
  );
}

export default App;
