import logo from "../assets/svg/CompanyLogo.svg"
import YTlogo from "../assets/svg/logo-yt.svg"
import IGlogo from "../assets/svg/logo-ig.svg"
import INlogo from "../assets/svg/logo-in.svg"

import Seperator from "./seperator"

export default function Footer() {
    const logoList = [YTlogo, IGlogo, INlogo]

    function linkComponent({ link, title }: { link: string; title: string }) {
        return (
            <div>
                <div className="flex flex-row justify-between">
                    <a href={link} className="w-35">
                        {title}
                    </a>
                </div>
            </div>
        )
    }

    const linkList = [
        {
            link: "#",
            title: "Our Story"
        },
        {
            link: "#",
            title: "Features"
        },
        {
            link: "#",
            title: "For Companies"
        },
        {
            link: "#",
            title: "For Individuals"
        }
    ]
    const linkList2 = [
        {
            link: "#",
            title: "Movement"
        },
        {
            link: "#",
            title: "Blog"
        },
        {
            link: "#",
            title: "FAQ"
        },
        {
            link: "#",
            title: "Terms of Service"
        }
    ]

    return (
        <div>
            <div className="mb-15">
                <Seperator height={"50px"} />
            </div>

            <div className="pb-10 border-b-2 border-border-default mb-16">
                <img src={logo} alt="Company Logo" className="relative " />
            </div>

            <div className="label-underline text-text-body flex flex-row flex-wrap justify-between ">
                {linkList.map((link, i) => (
                    <div key={i} className="mb-5">
                        {linkComponent(link)}
                    </div>
                ))}
                <div className="mt-8 flex flex-row flex-wrap justify-between">
                    {linkList2.map((link, i) => (
                        <div key={i} className="mb-5">
                            {linkComponent(link)}
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t-2 border-border-default pt-10 pb-15">
                <div className="flex flex-row gap-3 mb-5">
                    {logoList.map((logo, i) => (
                        <img src={logo} alt={`Logo ${i + 1}`} className="p-2.5 rounded-full border-2 border-border-default" />
                    ))}
                </div>
                <h1 className="xs-default text-text-placeholder">©2020 Duitin is trademark of PT Tjatra Yasa Indonesia. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia</h1>
            </div>
        </div>
    )
}