import styled from "styled-components";

export const NavConteiner = styled.nav`
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    color: #000;
    padding-left: 3%;
    padding-right: 3%;
    position: relative;

    @media (max-width: 800px) {
        flex-direction: row-reverse;
    }
`;

export const BoxNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 800px){
        display: none;
        
    }
    
    
`;