import Menu from "../components/layout/Menu";
import Data from "../data/dummyData.json"

export default function Saldo() {
    const saldo = Data.map(item => item.saldo).toLocaleString('id-ID')

    return (
        <div>
            <Menu back="/Home" TotalHarga={saldo} />
        </div>
    )
}