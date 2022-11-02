import { BoxMenuHamburguer, MenuHamburguerStyles1, MenuHamburguerStyles2, MenuHamburguerStyles3 } from "./styles";



export default function MenuHamburguer2({isVisible, menuClick}){
    
    return(
        
        <BoxMenuHamburguer onClick={menuClick}>
            <MenuHamburguerStyles1 isVisible={isVisible}/>
            <MenuHamburguerStyles2 isVisible={isVisible}/>
            <MenuHamburguerStyles3 isVisible={isVisible}/>
        </BoxMenuHamburguer>
    )
}