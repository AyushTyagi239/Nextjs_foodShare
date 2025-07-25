'use client'
import { usePathname } from "next/navigation"
import classes from "./nav-link.module.css"
import Link from 'next/link'


export default function Navlink({href , children}){
   const path = usePathname();
    return(
        <> 
        <Link  href={href} 
        className={path.startsWith(href)? `${classes.link}  ${classes.active}`: classes.link}>
        {children}</Link>
        

       
        </>
    )
}