import SimplePill from "../../components/common/SimplePill"
import ArrowIcon from "../../components/ui/icons/ArrowIcon"
import SimpleCard from "../../components/common/SimpleCard";
import { useEffect } from "react";
import { useTrash } from "../../context/TrashContext";
import { useHandleSetNum } from "../../type/handleSetNumt";

export default function SampahUmum() {
    const { setTotalHarga, numSampah } = useTrash();
    const handleSetNum = useHandleSetNum();
    
    const SampahUmumList = [
        {
            title: "Plastik",
            desc: "Rp. 1000/kg",
            harga: 1000,
        },
        {
            title: "Kertas",
            desc: "Rp. 1000/kg",
            harga: 1000,
        },
        {
            title: "Kaleng Aluminium",
            desc: "Rp. 1000/kg",
            harga: 1000,
        },
        {
            title: "Lainnya",
            desc: "Rp. -/kg",
            harga: 0,
            icon: <ArrowIcon className="text-icon-action w-4 h-4" /> 
        },
    ]

    const totalSsampah = numSampah.reduce((acc, val) => acc + val, 0);
    
    // Hitung total harga
    const totalHarga = numSampah.reduce((acc, val, idx) => {
        return acc + (val * SampahUmumList[idx].harga);
    }, 0);
    
    // Update global state ketika total harga berubah
    useEffect(() => {
        setTotalHarga(totalHarga);
    }, [totalHarga, setTotalHarga]);
    
    return (
        <div>
            <div className="flex flex-col mt-8">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="sm-semibold text-text-heading">Sampah Umum</h1>
                    <SimplePill text={"Total :" + totalSsampah + "kg"} /> {/* inget ganti nanti */}
                </div>
                <div className="flex flex-row flex-wrap justify-between gap-y-3 mt-5">
                    {SampahUmumList.map((item, i) => (
                        <div key={i}>
                            <SimpleCard {...item} numSampah={numSampah[i]} setNumSampah={handleSetNum(i)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}