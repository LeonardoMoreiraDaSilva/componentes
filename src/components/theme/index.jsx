import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";
import { useState } from "react";

const listThemes = [DarkTheme, DefaultTheme]


export default function ButtonAltTheme(){
     const [cont, setCont] = useState(0);
     console.log(cont)
     return(
        <>
            <button onClick={() => setCont(cont + 1)}></button>
        </>
    )   
}
console.log(cont)

const Theme = listThemes[0]
export {Theme}