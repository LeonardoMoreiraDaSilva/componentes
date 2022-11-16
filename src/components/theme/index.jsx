import { DarkTheme } from "./darkTheme";
import { DefaultTheme } from "./defaultTheme";


export const listThemes = [
    DarkTheme,
    DefaultTheme
]


const Theme = listThemes[1]
export {Theme}