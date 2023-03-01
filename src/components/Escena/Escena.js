import React from 'react';
import { Border } from '../../styled';

const Escena = ({ position, id, text }) =>
    <div>
        <Border active = {position === id ? true : false}> {text} </Border>
        
    </div>

export default Escena;



