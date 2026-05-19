import Menu from "../components/layout/Menu"
import IsiSampah from "../view/TrashCheckout/IsiSampah"
import LokasiJemput from "../view/TrashCheckout/LokasiJemput"
import WaktuJemput from "../view/TrashCheckout/WaktuJemput"
import { useEffect } from "react"
import { useTrash } from "../context/TrashContext"

const SampahList = [
    { harga: 1000 },  // Plastik
    { harga: 1000 },  // Kertas
    { harga: 1000 },  // Kaleng Aluminium
    { harga: 0 },     // Lainnya
];

export default function TrashCheckout() {
    const { numSampah, setTotalHarga, handleCariJemput } = useTrash();

    // Hitung total harga setiap kali numSampah berubah
    useEffect(() => {
        const totalHarga = numSampah.reduce((acc, val, idx) => {
            return acc + (val * SampahList[idx].harga);
        }, 0);
        setTotalHarga(totalHarga);
    }, [numSampah, setTotalHarga]);

    return (
        <div className="p-5 flex flex-col max-w-205 mx-auto">
            <Menu back="/ScanYourTrash" onclick={handleCariJemput} />
            <LokasiJemput />
            <WaktuJemput />
            <IsiSampah />
        </div>
    )
} 