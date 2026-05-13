import Menu from "../components/layout/Menu"
import LokasiJemput from "../view/TrashCheckout/LokasiJemput"
import WaktuJemput from "../view/TrashCheckout/WaktuJemput"

export default function TrashCheckout() {
    return (
        <div className="p-5 flex flex-col">
            <Menu back="/ScanYourTrash" />
            <LokasiJemput />
            <WaktuJemput />
        </div>
    )
} 