import SimplePill from "../../components/common/SimplePill"
import ArrowIcon from "../../components/ui/icons/ArrowIcon"
import SimpleCard from "../../components/common/SimpleCard";
import { useState, useEffect } from "react";
import { useTrash } from "../../context/TrashContext";

export default function SampahUmum() {
    const { setTotalHarga } = useTrash();
    
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
    const [numSampah, setNumSampah] = useState<number[]>(
        Array(SampahUmumList.length).fill(0)
    );

    const totalSsampah = numSampah.reduce((acc, val) => acc + val, 0);
    
    // Hitung total harga
    const totalHarga = numSampah.reduce((acc, val, idx) => {
        return acc + (val * SampahUmumList[idx].harga);
    }, 0);
    
    // Update global state ketika total harga berubah
    useEffect(() => {
        setTotalHarga(totalHarga);
    }, [totalHarga, setTotalHarga]);

    const handleSetNUm = (index: number) => (updater: (prev: number) => number) => {
        setNumSampah(prev => {
            const updated = [...prev];
            updated[index] = updater(updated[index]);
            return updated
        })
    }
    
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
                            <SimpleCard {...item} numSampah={numSampah[i]} setNumSampah={handleSetNUm(i)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}