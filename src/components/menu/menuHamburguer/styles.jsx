import styled from "styled-components";

export const MenuHamburguerStyles1 = styled.div`
width: 30px;
height: 4px;
border-radius: 50px;
background-color: #666;
margin: ${props => props.isVisible ? "-1px" : "1.5px"};
transform: ${props => props.isVisible ? "rotate(45deg)" : "rotate(0deg)"};
transition: 0.4s;
`;

export const MenuHamburguerStyles2 = styled.div`
width: 30px;
height: 4px;
border-radius: 50px;
background-color: #666;
margin: 1.5px;
display: ${props => props.isVisible ? "none" : "flex"};
`;

export const MenuHamburguerStyles3 = styled.div`
width: 30px;
height: 4px;
border-radius: 50px;
background-color: #666;
margin: ${props => props.isVisible ? "-2.5px" : "1.5px"};
transform: ${props => props.isVisible ? "rotate(-45deg)" : "rotate(0deg)"};
transition: 0.4s;
`;

export const BoxMenuHamburguer = styled.div`
display: none;
align-items: center;
justify-content: center;
flex-direction: column;
cursor: pointer;
    @media (max-width: 800px){
        display: flex;
        z-index: 6;
    }
`;