import logo from "../assets/svg/LogoMain.svg"

export default function LogoPill () {
    return (
        <div className="flex gap-2.5 bg-RIGO-secondary w-fit py-3 pr-5 pl-4 rounded-3xl">
            <img src={logo} alt="logo" />
            <p className="sm-semibold text-text-label">What We Solve</p>
        </div>
    )
}