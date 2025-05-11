import { useState, useEffect, useRef } from 'react';

import Item from "./components/item";
import { itemSlots } from "./itemMatcher";
import "./hooks/useThrottle";

import emptyResponse from "./data/empty_response.json";

import './App.css';
import useThrottle from './hooks/useThrottle';

function App() {
  const [items, setItems] = useState(emptyResponse);
  const [isHovered, setIsHovered] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const worker = useRef<Worker>();
  const recognitionThrottle = useThrottle(300);

  useEffect(() => {
    worker.current = new Worker(new URL('itemMatcher.js', import.meta.url), { type: 'module' });

    worker.current.onmessage = (event) => {
      setItems(event.data.items);
    }
    
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000);

    return () => {
      worker.current?.terminate();
      clearTimeout(timer)
    };
  }, []);

  useEffect(() => {    
    const messageHandler = (event: { origin: string; data: any; }) => {
      // We'll request a frame from parent window, then it'll pass the image here.
      if (event.origin !== 'https://www.twitch.tv') {
        console.warn('child: unepected origin - ' + event.origin);
        return;
      }

      recognitionThrottle(() => {
        if (!worker.current) {
          console.error('Worker not initialized');
        }

        worker.current?.postMessage([event.data]);
      });
    };
    
    window.addEventListener('message', messageHandler);

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
            <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center p-2 border-2 rounded-lg pointer-events-none animate-pulse border-zinc-300'>
              <p className='block w-full text-center text-zinc-300'>view items</p>
            </div>
          }

          <div className="relative flex mt-auto mr-auto text-sm transition-opacity duration-300 ease-in-out rounded backdrop-blur grid grid-cols-6 gap-0.5 lg:gap-1 m-1 lg:m-2 opacity-0 hover:opacity-100"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}>
            {items.map((item, index) => (
              <div className='relative' key={index + item}>
                <Item name={item} slot={''+index} />
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
