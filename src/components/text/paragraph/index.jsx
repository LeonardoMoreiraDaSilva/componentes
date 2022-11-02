import { ParagraphStyles } from "./styles"

export default function Paragraph(
        {children, w, margin, recuo, fontfamily, fontweight, fontsize, fontcolor}){
    return(
        <ParagraphStyles w={w} margin={margin} recuo={recuo} fontfamily={fontfamily}
        fontweight={fontweight} fontsize={fontsize} fontcolor={fontcolor}>
            {children}
        </ParagraphStyles>
    )
}
