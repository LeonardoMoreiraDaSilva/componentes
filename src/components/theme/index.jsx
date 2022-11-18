import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";


const listThemes = [
    DarkTheme,
    DefaultTheme
]

function changeTheme(currentTheme){
    const quantityTheme = listThemes.length - 1
    
        
    if(currentTheme === quantityTheme){
        currentTheme = 0 
    }else{
        currentTheme++
    }
    
    return(currentTheme)
    
}

export default function ButtonAltTheme(){
    
    return(
        <button onClick={changeTheme}></button>
    )  
}

let currentTheme = 0
currentTheme = changeTheme(currentTheme)
console.log(currentTheme)

const Theme = listThemes[currentTheme]
export {Theme}