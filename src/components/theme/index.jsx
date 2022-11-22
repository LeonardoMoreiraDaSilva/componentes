import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";


const listThemes = [DarkTheme, DefaultTheme]

let currentTheme = 0

function changeTheme(currentTheme){
        
        
    return(currentTheme++)
}

export default function ButtonAltTheme(){
    return(
        <button onClick={changeTheme}></button>
    )  
}
changeTheme(currentTheme)
currentTheme = currentTheme

const Theme = listThemes[currentTheme]
export {Theme}