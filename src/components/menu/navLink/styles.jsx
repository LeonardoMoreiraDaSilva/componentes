import styled from "styled-components";

export const NavLinkStyles = styled.div`
border-bottom: solid 5px ${props => props.isActive ? "#db2020cf" : "#ffffff10"};
color: ${props => props.isActive ? "#000" : "#77777797"};
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
margin-right: 20px;
`;