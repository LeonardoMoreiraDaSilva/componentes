import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";


const listThemes = [
    DarkTheme,
    DefaultTheme
]

function changeTheme(){
    const quantityTheme = listThemes.length - 1
    let currentTheme
    console.log(currentTheme)
        
    if(currentTheme === NaN){
        currentTheme = 0
        
    } else if(currentTheme === quantityTheme){
            currentTheme = 0
        
        }else{currentTheme++}
    
    return(currentTheme)
    
}

export default function ButtonAltTheme(){
    
    return(
        <button onClick={changeTheme}></button>
    )  
}

const currentTheme = changeTheme()
console.log(currentTheme)

const Theme = listThemes[1]
export {Theme}