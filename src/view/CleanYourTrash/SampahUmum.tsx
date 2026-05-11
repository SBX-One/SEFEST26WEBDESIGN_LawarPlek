import SimplePill from "../../components/common/SimplePill"
import ArrowIcon from "../../components/ui/icons/ArrowIcon"
import SimpleCard from "../../components/common/SimpleCard";
import { useState } from "react";

export default function SampahUmum() {
    
    const SampahUmumList = [
        {
            title: "Plastik",
            desc: "Rp. 1000/kg",
        },
        {
            title: "Kertas",
            desc: "Rp. 1000/kg",
        },
        {
            title: "Kaleng Aluminium",
            desc: "Rp. 1000/kg",
        },
        {
            title: "Lainnya",
            desc: "Rp. -/kg",
            icon: <ArrowIcon className="text-icon-action w-4 h-4" /> 
        },
    ]
    const [numSampah, setNumSampah] = useState<number[]>(
        Array(SampahUmumList.length).fill(0)
    );

    const totalSsampah = numSampah.reduce((acc, val) => acc + val, 0);

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