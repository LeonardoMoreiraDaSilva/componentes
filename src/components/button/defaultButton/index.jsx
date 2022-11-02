import { DefaultButtonStyles } from "./styles";

export default function DefaultButton(
    {children, w, h, bgc, bgh, fontcolor, fontcolorh, fontsize, bradius, margin}){
    return(
        <DefaultButtonStyles 
            w={w} h={h} bgc={bgc} bgh={bgh} fontcolor={fontcolor} 
            fontcolorh={fontcolorh} fontsize={fontsize} bradius={bradius} 
            margin={margin}>{children}
        </DefaultButtonStyles>
    )
}
