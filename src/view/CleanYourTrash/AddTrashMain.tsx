import Menu from "../../components/layout/Menu"
import { useTrash } from "../../context/TrashContext"
import plus from "../../assets/svg/plus.svg"
import minus from "../../assets/svg/minus.svg"
import SimpleIcon from "../../components/ui/icons/SimpleIcon";
import { useEffect, useState } from "react";
import ScanMeth from "./ScanMethod";

export default function AddSampahMain() {
    const { setTotalHarga, setUserInput } = useTrash();
    const [numSampah, setNumSampah] = useState<number>(0);

    const hargaFinal = numSampah * 1000 
    useEffect(() => {
        })

        function handleAdd() {
        const nextNum = numSampah + 1;
        setNumSampah(nextNum);
        setTotalHarga(nextNum * 1000); 
    }

function handleMins() {
    if (numSampah <= 0) {
        alert("barang tidak bisa kurang dari 0");
        return;
    }
    const nextNum = numSampah - 1;
    setNumSampah(nextNum);
    setTotalHarga(nextNum * 1000);
}

    return (
        <div className="px-5">
            <Menu back={-1} mode="add"/>
            <div className="mb-3 mt-10">
                <h1 className="xs-default text-text-label">Jenis / Nama Sampah</h1>
                <input onChange={(e) => setUserInput(e.target.value)} type="text" placeholder="Cth. Kabel" className="rounded-2xl px-3 py-3.5 text-text-body border-2 border-border-default w-full mt-4" />
            </div>
            <div className="flex flex-row w-full gap-3">
                <div className="flex flex-row justify-between items-center w-full">
                    <div onClick={handleAdd}>
                        <SimpleIcon icon={plus} iconWidth={16} />
                    </div>
                    <p className="label-default text-text-body">{numSampah}</p>
                    <div onClick={handleMins}>
                        <SimpleIcon icon={minus} iconWidth={16} />
                    </div>
                </div>
                <div className="py-3.75 px-5 border-2 border-border-default rounded-2xl">
                    <p className="text-text-action label-semibold">KG</p>
                </div>
            </div>

            <div className="flex flex-row w-full items-center gap-5 my-10">
                <hr className="border-2 border-border-default w-full" />
                <h1 className="xs-default text-text-label">Atau</h1>
                <hr className="border-2 border-border-default w-full" />
            </div>

            <ScanMeth />
        </div>
    )
}