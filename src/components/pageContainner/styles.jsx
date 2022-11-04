import styled from "styled-components";

export const MainStyles = styled.main`
    background-color: #d6e3f0;
    display: ${props => props.isVisible ? "block" : "block"};
    z-index:5;
    overflow-x: hidden;
    
    transform: translateX(${props => props.isVisible ? "200px" : "0px"});
    transition: 1s;
`;