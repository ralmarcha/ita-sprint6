import React from "react";
import styled from "styled-components";


 export const WelcomePage = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    font-family: Arial;
    text-align: center;
    align-items: center;
    color: white;
    background-color : #85a3e0;
  `;

export const Welcomebutton = styled.button`
  padding: 10px;
  width : 150px;
  color : white;
  border-radius : 20px;
  border-color: white;
  background-color:  #3366cc;
  cursor: pointer;
  &:hover{
    opacity: 0.75;
   }
`

export const Welcome = ({ següent }) => {
  return (
    <WelcomePage>
      <h1 >Benvinguts i Benvingudes</h1>
      <h4>Apreta el botó començar la història</h4>
     <Welcomebutton onClick={següent}>COMENÇAR</Welcomebutton>
    </WelcomePage>
  );
};