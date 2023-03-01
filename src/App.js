import './App.css';
import React from 'react';
import Escena from './components/Escena/Escena';
import { Back} from './components/Background';
import { data } from './components/data';
import { Button } from './components/Button';
import { useState } from 'react';
import { Welcome } from './components/Welcome';

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

  const [welcomePage, setPage] = useState(true);
  const nextPage = () => {
    setPage(false);
  };

  return welcomePage === true ? (
    <Welcome nextPage={nextPage}/>
  ) :  (
    <Back background={data[position-1].img}>
      <div style={{marginTop: `50px`, marginLeft:`40px`}}>
         <Button onClick={previous}> Anterior </Button>
         <Button onClick={next}> Següent </Button>
      </div>
      <div style={{marginTop: `30px`, marginLeft:`60px`}}>
          {data.map((element) => (<Escena key={element.id} id={element.id} image={element.img} text={element.text} position={position}
          />))}
      </div>
    </Back>
  );   
}

export default App;

