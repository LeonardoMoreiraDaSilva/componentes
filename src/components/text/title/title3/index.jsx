import {TitleStyles3} from "./styles"


export default function Title3(
    {children, fontfamily, fontsize, fontcolor, fontweight}){
    return(
        <TitleStyles3
        fontfamily={fontfamily} fontsize={fontsize} fontcolor={fontcolor}
        fontweight={fontweight}>
                {children}
        </TitleStyles3>
    )
}