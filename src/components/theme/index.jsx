import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";


const Themes = [
    DarkTheme,
    DefaultTheme
]
const teste = "ok"
//console.log(teste)

export default function AlternarTheme(){
    return(
        console.log('esta funcionando! ok...')
        );
}



const Theme = Themes[1]
export {Theme}