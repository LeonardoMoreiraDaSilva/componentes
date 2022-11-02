import styled from 'styled-components';
import {Theme} from '../../../theme';

export const TitleStyles3 = styled.h3`
    font-family: ${props => props.fontfamily || Theme.h3.fontfamily};
    font-size: ${props => props.fontsize || Theme.h3.fontsize};
    font-weight: ${props => props.fontweight || Theme.h3.fontweight};
    color: ${props => props.fontcolor || Theme.h3.fontcolor};
`;