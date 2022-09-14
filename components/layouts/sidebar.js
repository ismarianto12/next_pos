import a from 'next/link'
import * as Icon from 'react-feather'
import { useRouter } from 'next/router'
import SVG from "react-inlinesvg";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuBar from './menubar';




const Sidebar = () => {


    // console.log(getMenuItemActive("/dashboard", false))
    return (
        <>
            <div id="kt_aside_menu" className="aside-menu my-4 scroll ps ps--active-y">
                {/*begin::Menu Nav*/}
                <ul className={`menu-nav`}>
                   
                        <MenuBar />
             


                </ul>

            </div>
        </>)

}

export default Sidebar