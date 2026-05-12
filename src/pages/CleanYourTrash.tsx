import Menu from "../components/layout/Menu"
import SampahUmum from "../view/CleanYourTrash/SampahUmum"
import ScanMeth from "../view/CleanYourTrash/ScanMethod"
import { TrashProvider } from "../context/TrashContext"

export default function CleanYourTrash() {
    return (
        <TrashProvider>
            <div className="p-5 flex flex-col">
                <Menu />
                <SampahUmum />
                <ScanMeth />
            </div>
        </TrashProvider>
    )
}