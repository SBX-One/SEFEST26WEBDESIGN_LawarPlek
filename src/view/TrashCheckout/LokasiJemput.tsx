import Bar from "../../components/common/Bar"
import house from "../../assets/svg/house.svg"
import map from "../../assets/svg/map.svg"

export default function LokasiJemput() {
    return (
        <div className="mt-8 flex flex-col gap-4">
            <h1 className="sm-semibold text-text-label">Lokasi Jemput</h1>
            <Bar iconL={house} iconR={map} title="Jl. Pulau Ambon No.9" desc="Denpasar Barat, Bali" />
        </div>
    )
}