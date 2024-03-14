// import Link from "next/link"
// import Button from "../input/Button";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

interface HamburgerMenuProps {
    closeMenu: () => void;
}

export const NAV_LINKS = [
    { href: '/about', key: 'about', label: 'About' },
    { href: '/services', key: 'services', label: 'Services' },
    { href: '/contact_us', key: 'contact_us', label: 'Contact' },
];

function HamburgerMenu({ closeMenu }: HamburgerMenuProps) {
    return (
        <div className="flex flex-col items-center text-black-90 basis-full bg-red-200 hamburgerMenu h-screen z-20 fixed top-0 left-0 w-full">
            <div className="flex justify-between items-center w-full p-4">
                <a href='/'>
                    <img src='/logo.png' alt="logo" className="w-[70px] h-[50px] md:w-[100px] md:h-[70px]" />
                </a>
                <IoMdClose className="w-6 h-6 cursor-pointer text-black-90" onClick={closeMenu} />
            </div>
            <NavLinks closeHamburger={closeMenu} />
            {/* <Button type="button" title="Book now" variant="btn_transparent_black" /> */}
            <p className="p-3 text-4xl text-black-90 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">+1 234 567 890</p>
        </div>
    );
}

type NavLinksProps = {
    closeHamburger?: () => void;
}

function NavLinks({ closeHamburger }: NavLinksProps) {
    function handleLinkClick() {
        if (closeHamburger) {
            closeHamburger();
        }
    }
    return (
        <ul className="list-none p-0 m-0 flex flex-col lg:flex-row lg:gap-12">
            {NAV_LINKS.map((link) => (
                <li key={link.key}>
                    <a href={link.href} className="text-4xl lg:text-sm text-grey-50 flex justify-between cursor-pointer pb-1.5 transition-all hover:font-bold" onClick={handleLinkClick}>
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    console.log("showMenu", showMenu)
    function handleShowMenu() {
        setShowMenu(!showMenu)
    }

    function closeMenu() {
        setShowMenu(false);
    }

    return (
        <nav className="w-full z-10 py-[1.5rem] bg-[#DFCCC2]">
            <div className="flexBetween flex-wrap  md:px-5">
                <ul className="hidden h-full gap-12 lg:flex">
                    {/* <p className="text-sm text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hidden lg:inline-block">+1 234 567 890</p> */}
                    <NavLinks />
                </ul>
                <a href='/'>
                    {/* <img src='/logo.png' alt="logo" className="w-[70px] h-[50px] md:w-[100px] md:h-[70px]" /> */}
                    <p className="text-bold text-3xl">Maya Brows</p>
                </a>
                <div className="flex flex-row gap-3 md:gap-5">
                    <div className="lg:flexCenter">
                        {/* <Button type="button" title="Book now" variant="btn_transparent" /> */}
                        Book an appotinment
                    </div>
                    <p className="text-sm text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold inline-block lg:hidden">+1 234 567 890</p>
                    <MdOutlineMenu className="w-[32px] h-[32px] cursor-pointer lg:hidden" onClick={handleShowMenu} />
                </div>
                {showMenu ? (
                    <HamburgerMenu closeMenu={closeMenu} />
                ) : null}
            </div>
        </nav>
    )
}

export default Navbar;