import {TitleStyles4} from "./styles"


export default function Title4(
    {children, fontfamily, fontsize, fontcolor, fontweight}){
    return(
        <TitleStyles4
        fontfamily={fontfamily} fontsize={fontsize} fontcolor={fontcolor}
        fontweight={fontweight}>
                {children}
        </TitleStyles4>
    )
}