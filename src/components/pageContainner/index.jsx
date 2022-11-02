import Navegation2 from "../menu/navegation"

export function PageContainner ({children}){
    return(
        <>
            <Navegation2/>
            <main>{children}</main>
        </>
    )
};