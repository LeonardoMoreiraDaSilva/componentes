import { LightButtonStyles } from "./styles";

export default function LightButton(
    {children, w, h, bgc, bgh, fontcolor, fontcolorh, fontsize, bradius, margin}){
    return(
        <LightButtonStyles
            w={w} h={h} bgc={bgc} bgh={bgh} fontcolor={fontcolor} 
            fontcolorh={fontcolorh} fontsize={fontsize} bradius={bradius} 
            margin={margin}>{children}
        </LightButtonStyles>
    )
}