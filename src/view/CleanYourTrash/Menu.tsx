import chevron from "../../assets/svg/fi_chevron-down.svg"
import SimplePill from "../../components/common/SimplePill"

export default function Menu() {
    return (
        <div className="flex flex-row justify-between pb-5 border-b-2 border-border-default w-screen left-0 relative ml-[calc(50%-50vw)] px-5">
            <img src={chevron} alt="back" className="p-3.5 border-2 border-border-default rounded-2xl" />
            <SimplePill text="Total : Rp. 14.000" />
        </div>
    )
}