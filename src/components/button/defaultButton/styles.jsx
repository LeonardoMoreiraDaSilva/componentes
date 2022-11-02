import styled from "styled-components";
import { Theme } from "../../theme";


export const DefaultButtonStyles = styled.button`
width: ${props => props.w || Theme.button.w};
height: ${props => props.h || Theme.button.h};
background-color: ${props => props.bgc || Theme.button.bgc};
color: ${props => props.fontcolor || Theme.button.fontcolor};
font-size: ${props => props.fontsize || Theme.button.fontsize};
border-radius: ${props => props.bradius || Theme.button.bradius};
margin: ${props => props.margin || Theme.button.margin};
border: none;
position: relative;
padding: 0.8em 1.8em;
cursor:pointer;
user-select:none;
text-align: center;
text-decoration: none;
cursor: pointer;
transition-duration: 0.4s;
-webkit-transition-duration: 0.4s; /* Safari */

  &:hover {
      transition-duration: 0.1s;
      background-color: ${props => props.bgh || Theme.button.bgh};
      color: ${props => props.fontcolorh || Theme.button.fontcolorh}
  }

  &:after {
      content: "";
      display: block;
      position: absolute;
      border-radius: ${props => props.bradius || Theme.button.bradius};
      left: 0;
      top:0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.5s;
      box-shadow: 0 0 10px 40px white;
  }

  &:active:after {
      box-shadow: 0 0 0 0 white;
      position: absolute;
      border-radius: ${props => props.bradius || Theme.button.bradius};
      left: 0;
      top:0;
      opacity: 1;
      transition: 0s;
  }

  &:active {
      top: 1px;
  }
`;