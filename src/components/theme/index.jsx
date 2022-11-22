import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";


const listThemes = [DarkTheme, DefaultTheme]
let currentTheme = 0


function changeTheme(){
    let setCurrentTheme = 0
    function cont (setCurrentTheme){
        setCurrentTheme++
    }
    currentTheme = cont(setCurrentTheme)
    return(currentTheme)
}
console.log(currentTheme)
export default function ButtonAltTheme(){
    return(
        <button onClick={changeTheme}></button>
    )  
}

console.log(currentTheme)
const Theme = listThemes[0]
export {Theme}