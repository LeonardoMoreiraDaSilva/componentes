import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";


const listThemes = [DarkTheme, DefaultTheme]
//let inicialThema = 0
let currentTheme = 0

function changeTheme(){
    
    currentTheme++
    //console.log(currentTheme)
    return(currentTheme)
}
console.log(currentTheme = currentTheme)
export default function ButtonAltTheme(){
    return(
        <button onClick={changeTheme}></button>
    )  
}

//inicialThema = changeTheme()
//console.log(inicialThema)

const Theme = listThemes[1]
export {Theme}