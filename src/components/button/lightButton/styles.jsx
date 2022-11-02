import styled from "styled-components";
import { Theme } from "../../theme";

export const LightButtonStyles = styled.button`
  width: ${props => props.w || Theme.button.w};
  height: ${props => props.h || Theme.button.h};
  background-color: ${props => props.bgc || Theme.button.bgc};
  color: ${props => props.fontcolor || Theme.button.fontcolor};
  font-size: ${props => props.fontsize || Theme.button.fontsize};
  border-radius: ${props => props.bradius || Theme.button.bradius};
  margin: ${props => props.margin || Theme.button.margin};
  border: 0px solid rgba(230,231,238,0);
  padding: 10px 20px;
  cursor: pointer;
  -webkit-box-shadow: 5px 5px 8px #b8b9be, -5px -5px 9px #fff;
    box-shadow: 5px 5px 7px #b8b9be, -5px -5px 7px #fff, 5px 5px 7px #b8b9be, -5px -5px 7px #fff;
    &:active {
        cursor: pointer;
        -webkit-box-shadow: inset 3px 3px 5px #b8b9be, inset -5px -5px 9px #fff;
        box-shadow: inset 5px 5px 7px #b8b9be, inset -5px -5px 9px #fff;
    }
    &:hover{
        color: ${props => props.fontcolorh || Theme.button.fontcolorh};
        background-color: ${props => props.bgh || Theme.button.bgh};
    }
`;