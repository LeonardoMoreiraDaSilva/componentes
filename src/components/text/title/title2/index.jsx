import {TitleStyles2} from "./styles"


export default function Title2(
    {children, fontfamily, fontsize, fontcolor, fontweight}){
    return(
        <TitleStyles2
        fontfamily={fontfamily} fontsize={fontsize} fontcolor={fontcolor}
        fontweight={fontweight}>
                {children}
        </TitleStyles2>
    )
}