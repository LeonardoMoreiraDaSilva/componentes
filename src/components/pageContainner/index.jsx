import Navegation2 from "../menu/navegation";
import { MainStyles } from "./styles";

export function PageContainner ({children}){
    return(
        <>
            <Navegation2/>
            <MainStyles>{children}</MainStyles>
        </>
    )
};