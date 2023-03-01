import React from "react";
import styled from "styled-components";
import galaxia from '../img/galaxia.jpg';

 export const WelcomePage = styled.div`
    display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  font-family: Arial;
  align-items: center;
  ${'' /* color: white; */}
  background-size: cover;
  background-position: center;
  background-image: url("../img/galaxia.jpg");
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