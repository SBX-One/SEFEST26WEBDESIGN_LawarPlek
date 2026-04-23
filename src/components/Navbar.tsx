import Logo from "../assets/svg/CompanyLogo.svg"
import Burger from "../assets/svg/Burger.svg"

export default function Navbar() {
    return (
        <div className="bg-neutral-white py-10 flex justify-between border-b border-[#DEDEDE]">
            <img src={Logo} alt="Company Logo" />
            <img src={Burger} alt="menu" className="p-4.5 rounded-full border-border-default border" />
        </div>
    )
}