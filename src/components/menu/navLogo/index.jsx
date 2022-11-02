import Link from "next/link";
import Image from "next/image";
import Logo from "/public/image/Impacto_code.png";
import { NavLogoStyles } from "./styles";


export default function NavLogo (){
    return(
        <>
            <NavLogoStyles>
                <Link href={"/"}>
                    <a><Image src={Logo}/></a>
                </Link>
            </NavLogoStyles>
        </>
    )
}
