import Navbar from "../components/layout/Navbar"
import Balance from "../view/Home/Balance"
import Bantuan from "../view/Home/BantuanDanPanduan"

export default function Home() {
    return (
        <div className="px-5">
            <Navbar mode="home"/>
            <Balance />
            <Bantuan />
        </div>
    )
}