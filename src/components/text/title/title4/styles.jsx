import styled from 'styled-components';
import {Theme} from '../../../theme';

export const TitleStyles4 = styled.h4`
    font-family: ${props => props.fontfamily || Theme.h4.fontfamily};
    font-size: ${props => props.fontsize || Theme.h4.fontsize};
    font-weight: ${props => props.fontweight || Theme.h4.fontweight};
    color: ${props => props.fontcolor || Theme.h4.fontcolor};
`;