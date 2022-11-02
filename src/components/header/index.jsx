import MenuMobile from "../menu/menuMobile";
import Navegation2 from "../menu/navegation";
import { HeaderMainStyles } from "./styles";


export default function HeaderMain (){
    return(
        <HeaderMainStyles>
            <MenuMobile/>
            <Navegation2/>
        </HeaderMainStyles>
    )
}