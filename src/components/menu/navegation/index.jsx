import NavLink from "../navLink";
import NavLogo from "../navLogo";
import { NavConteiner } from "./styles";
import MenuHamburguer2 from "../menuHamburguer";
import MenuMobile from "../menuMobile";
import { BoxNav } from "./styles";
import DefaultButton from "../../button/defaultButton";
import { listThemes } from "../../theme";



export default function Navegation2({isVisible, menuClick}){
    
    function alternarThemer (){
        console.log("testando");
        const atualTheme = "Tudo certo";

        
    }
    return( 
        <>
        
            <NavConteiner>
                <NavLogo/>
                <BoxNav>
                    <NavLink  path="/" text="HOME" />
                    <NavLink  path="/componentes" text="COMPONENTES"/>
                    <DefaultButton alternarThemer={alternarThemer}>Themer</DefaultButton>
                </BoxNav>
                <MenuHamburguer2 isVisible={isVisible} menuClick={menuClick}/>
            </NavConteiner>
            <MenuMobile isVisible={isVisible}/>
        </>
    )
}