import React from 'react';
//import {useRef} from 'react';

// const Escena = () => <div>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</div>;
//const nombre = useRef(null);
const Escena = props => <div>{props.param}</div>

//useRef?
//hay que generar un estado al hacer click en el botón
//un useEffect que cuando cambia el estado cambie el color?

export default Escena;