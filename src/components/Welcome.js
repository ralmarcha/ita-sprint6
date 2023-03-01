import React from "react";
import styled from "styled-components";
import galaxia from '../img/galaxia.jpg';

 export const WelcomePage = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    font-family: Arial;
    text-align: center;
    align-items: center;
    color: white;
    background-color : #76b5c5;
  `;


export const Welcome = ({ següent }) => {
  return (
    <WelcomePage>
      <h1 >Benvinguts i Benvingudes</h1>
      <h4>Apreta el botó començar la història</h4>
     <button onClick={següent}>COMENÇAR</button>
    </WelcomePage>
  );
};