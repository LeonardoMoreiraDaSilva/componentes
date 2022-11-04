import styled from "styled-components";

export const MenuMobileStyles = styled.div`
position: absolute;
width: 200px;
height: 100vh;
margin-top: 0;
margin-left: 0;
margin-right: 0;
margin-bottom: 0;
display: ${props => props.isVisible ? "flex" : "flex"};
transition:0,8s;
align-items: center;
justify-content: space-evenly;
background-color: #8f9dec;
flex-direction: column;
padding-bottom: 200px;
z-index: 0;
`;

