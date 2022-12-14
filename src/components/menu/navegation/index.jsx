import NavLink from "../navLink";
import NavLogo from "../navLogo";
import { NavConteiner } from "./styles";
import MenuHamburguer2 from "../menuHamburguer";
import MenuMobile from "../menuMobile";
import { BoxNav } from "./styles";
import ButtonAltTheme from "../../theme";




export default function Navegation2({isVisible, menuClick}){
    
    return( 
        <>
        
            <NavConteiner>
                <NavLogo/>
                <BoxNav>
                    <NavLink  path="/" text="HOME" />
                    <NavLink  path="/componentes" text="COMPONENTES"/>
                    <ButtonAltTheme>Theme</ButtonAltTheme>
                </BoxNav>
                <MenuHamburguer2 isVisible={isVisible} menuClick={menuClick}/>
            </NavConteiner>
            <MenuMobile isVisible={isVisible}/>
        </>
    )
}