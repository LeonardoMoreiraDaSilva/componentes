import {TitleStyles1} from "./styles"


export default function Title1(
    {children, fontfamily, fontsize, fontcolor, fontweight}){
    return(
        <TitleStyles1
        fontfamily={fontfamily} fontsize={fontsize} fontcolor={fontcolor}
        fontweight={fontweight}>
                {children}
        </TitleStyles1>
    )
}