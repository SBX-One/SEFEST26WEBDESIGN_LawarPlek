import Footer from "../components/layout/footer";
import Navbar from "../components/layout/Navbar";
import Balance from "../view/Home/Balance";
import MainKamus from "../view/Kamus/MainKamus";

export default function Kamus() {
    return (
        <div className="px-5">
            <Navbar mode="home" />
            <Balance />
            <MainKamus />
            <Footer />
        </div>
    )
}