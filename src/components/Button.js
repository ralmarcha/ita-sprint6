import styled from "styled-components";

export const Button = styled.button`
 cursor: pointer;
   height: 40px;
   width: 45%;
   margin-top: 20px;
   margin-left: 10px;
   margin-bottom: 10px;
   color: black;
   display: flex;
   text-align: center;
   justify-content: center;
   display: inline-block;
   font-size: 16px;
   font-family: Arial;
   transition: 0.4s all ease-in-out;
   &:hover{
    opacity: 0.75;
   }
 `;