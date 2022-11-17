import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";
import DefaultButtonStyles from "../button/defaultButton/styles";

const listThemes = [
    DarkTheme,
    DefaultTheme
]

export default function ButtonAltTheme(){
    
    function testeok(){
        console.log("Tudo funcionando ainda!")
        const atualTheme = listThemes[0]
    }
    return(
        
       <button onClick={testeok}></button>
    )
}

console.log(atualTheme)
const Theme = listThemes[1]
export {Theme}