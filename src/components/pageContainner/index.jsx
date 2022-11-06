import Navegation2 from "../menu/navegation";
import { MainStyles } from "./styles";
import { useState } from "react";



export function PageContainner ({children}){
    const [isVisible, setIsVisible] = useState(false);

    function menuClick (){
        setIsVisible(isVisible => !isVisible);
        console.log(isVisible)
    }

    return(
        <>
           
            <Navegation2 isVisible={isVisible} menuClick={menuClick}/>
            <MainStyles isVisible={isVisible}>{children}</MainStyles>
          
        </>
    )
};