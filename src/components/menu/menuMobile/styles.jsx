import styled from "styled-components";

export const MenuMobileStyles = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
margin-top: -50px;
margin-left: 0;
margin-right: 0;
margin-bottom: 0;
display: ${props => props.isVisible ? "flex" : "none"};
align-items: center;
justify-content: space-evenly;
background-color: #8f9dec;
flex-direction: column;
padding-bottom: 200px;
z-index: 5;
`;

