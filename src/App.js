import './App.css';
import React from 'react';
import Escena from './components/Escena/Escena';
import { data } from './components/data';
import { Button } from './components/Button';
import { useState } from 'react';

function App() {
  const [position, setPosition] = useState(1);

  const previous = () => { 
    if (position <= data.length) {
      setPosition(position - 1);
    }
    if (position === 1) {
      setPosition(4);
    }
  }
 
  const next = () => {
    if (position < data.length) {
      setPosition(position + 1);
    }
    if (position >= data.length) {
        setPosition(1);
    }
  }

  return (
    <div>
      <Button onClick={previous}> Anterior </Button>
      <Button onClick={next}> Següent </Button>
      {data.map((element) => (<Escena  key={element.id} id={element.id} image={element.img} text={element.text} position={position}
      />))}
     </div>
     );
}

export default App;

