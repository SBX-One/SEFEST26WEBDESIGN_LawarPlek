import Navbar from "../components/layout/Navbar"
import Search from "../components/common/Search"

export default function Home() {
    return (
        <div className="px-5">
            <Navbar mode="home"/>
            <Search />            
        </div>
    )
}