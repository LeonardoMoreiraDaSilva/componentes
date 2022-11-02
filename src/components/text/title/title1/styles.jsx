import styled from 'styled-components';
import {Theme} from '../../../theme';

export const TitleStyles1 = styled.h1`
    font-family: ${props => props.fontfamily || Theme.h1.fontfamily};
    font-size: ${props => props.fontsize || Theme.h1.fontsize};
    font-weight: ${props => props.fontweight || Theme.h1.fontweight};
    color: ${props => props.fontcolor || Theme.h1.fontcolor};
`;