import Logo from "../assets/svg/CompanyLogo.svg"
import Burger from "../assets/svg/Burger.svg"
import DropDown from "./DropDown"
import chevron from "../assets/svg/chevron-right.svg"

import {useState} from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className="bg-neutral-white py-10 flex justify-between border-b border-[#DEDEDE]">
                <img src={Logo} alt="Company Logo" />
                <img src={isMenuOpen ? chevron : Burger} onClick={() => setIsMenuOpen(!isMenuOpen)} alt="menu" className={`p-4.5 rounded-full border-border-default border ${isMenuOpen ? 'rotate-90' : ''}`} />
            </div>
            <div>
                {isMenuOpen && (
                    <DropDown />
                )}
            </div>
        </div>
    )
}