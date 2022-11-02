import styled from 'styled-components';
import {Theme} from '../../../theme';

export const TitleStyles2 = styled.h2`
    font-family: ${props => props.fontfamily || Theme.h2.fontfamily};
    font-size: ${props => props.fontsize || Theme.h2.fontsize};
    font-weight: ${props => props.fontweight || Theme.h2.fontweight};
    color: ${props => props.fontcolor || Theme.h2.fontcolor};
`;