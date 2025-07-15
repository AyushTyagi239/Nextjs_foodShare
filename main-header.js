import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import style from './main-header.module.css'
import MainHeaderBackground from './main-header-background'

import Navlink from './navlink'
export default function MainHeader(){
    
    return(<>
        <MainHeaderBackground/>
        <header className={style.header}>
            <Link className={style.logo} href="/">
            <Image src={logo} alt="home icon" priority />
            POP MEALS
            </Link>
            <nav className={style.nav}>
                <ul>
                    <li> <Navlink href="/meals"> Browse Meals</Navlink> </li>
                   <li> <Navlink href="/community"> Community </Navlink> </li>
                </ul>
            </nav>
        </header>
    </>)
}