import Menu from "../components/layout/Menu";
import EstimateTime from "../view/Receipt/EstimateTime";
import FewDetails from "../view/Receipt/FewDetails";

export default function Receipt() {
    
    return (
        <div className="text-text-body mt-14 px-5">
            <Menu back="/Home" />
            <EstimateTime />
            <FewDetails />
        </div>
    )
}