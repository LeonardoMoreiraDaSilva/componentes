import styled from "styled-components";
import { Theme } from "../../theme";


export const ParagraphStyles= styled.p`
    width: ${props => props.w || Theme.p.W};
    margin: ${props => props.margin || Theme.p.margin};
    text-indent: ${props => props.recuo || Theme.p.recuo};
    font-family: ${props => props.fontfamily || Theme.p.fontfamily};
    color: ${props => props.fontcolor || Theme.p.fontcolor};
    font-size: ${props => props.fontsize || Theme.p.fontsize};
    font-weight: ${props => props.fontweight || Theme.p.fontweight};

`;