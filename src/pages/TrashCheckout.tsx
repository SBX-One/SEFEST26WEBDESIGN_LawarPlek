import Menu from "../components/layout/Menu"
import IsiSampah from "../view/TrashCheckout/IsiSampah"
import LokasiJemput from "../view/TrashCheckout/LokasiJemput"
import WaktuJemput from "../view/TrashCheckout/WaktuJemput"

export default function TrashCheckout() {
    return (
        <div className="p-5 flex flex-col">
            <Menu back="/ScanYourTrash" />
            <LokasiJemput />
            <WaktuJemput />
            <IsiSampah />
        </div>
    )
} 