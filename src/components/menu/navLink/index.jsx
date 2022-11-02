import Link from "next/link";
import {useRouter} from "next/router";
import { NavLinkStyles } from "./styles";


export default function NavLink({path, text}){
    const router = useRouter();
    const isActive = router.pathname === path;
    
    return(
        <NavLinkStyles isActive={isActive}>
            <Link href={path} >
                <a>{text}</a>
            </Link>
        </NavLinkStyles>
    )
}