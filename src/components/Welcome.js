import React from "react";
import styled from "styled-components";
import galaxia from "../img/galaxia.jpg";

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
    background-image : url(${galaxia});
    background-size: cover;
    background-repeat : no-repeat;
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
export const Text = styled.div`
  margin-top : 250px;
`

export const Welcome = ({ nextPage }) => {
  return (
    <WelcomePage>
          <Text>
              <h1>Benvinguts i Benvingudes</h1>
              <h4>Apreta el botó començar la història del nostre heroi</h4>
          </Text>
       <Welcomebutton onClick={nextPage}>COMENÇAR</Welcomebutton>
    </WelcomePage>
  );
};