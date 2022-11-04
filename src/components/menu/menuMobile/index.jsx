import { MenuMobileStyles } from "./styles";
import NavLink from "../navLink";


export default function MenuMobile ({isVisible}){
    return(
        <MenuMobileStyles isVisible={isVisible}>
            <NavLink  path="/" text="HOME"/>
            <NavLink  path="/componentes" text="COMPONENTES"/>
        </MenuMobileStyles>
    )
}