import { useNavigate } from "react-router-dom"
import Menu from "../components/layout/Menu"
import RigoButton from "../components/ui/button/RigoButton"
import SampahUmum from "../view/CleanYourTrash/AddSampah"
import AddSampahTemplate from "../view/CleanYourTrash/AddSampahTemplate"
import ScanMeth from "../view/CleanYourTrash/ScanMethod"

export default function CleanYourTrash() {
    const navigate = useNavigate()

    return (
        <div className="p-5 flex flex-col">
            <Menu back="/Home" />
            <SampahUmum />
            <ScanMeth />
            <AddSampahTemplate />
            <div className="sticky bottom-10" onClick={() => navigate('/TrashCheckout')}>
                <RigoButton inv={true} text="Lanjut" />
            </div>
        </div>
    )
}
