import styled from "styled-components";

 export const Border = styled.p`
    height: 40px;
    width : 80%;
    border: 1px solid black;
    margin-left : 60px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial;
    background-color: ${({ active }) => (active ? "pink" : "white")};
  `;

