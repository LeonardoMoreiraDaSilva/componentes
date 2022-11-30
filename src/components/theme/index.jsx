import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";


const listThemes = [DarkTheme, DefaultTheme]
let currentTheme = 0

function changeTheme(){
   currentTheme++
   console.log(currentTheme)
    return(currentTheme)
}

console.log(currentTheme)

export default function ButtonAltTheme(){
    return(
        <button onClick={changeTheme}></button>
    )  
}

console.log(currentTheme)
const Theme = listThemes[currentTheme]
export {Theme}