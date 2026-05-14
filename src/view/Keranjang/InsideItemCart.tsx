import Bar from "../../components/common/Bar";
import house from "../../assets/svg/house.svg"
import map from "../../assets/svg/map.svg"
import data from "../../data/Keranjang.json"
import HitungTotalHarga from "../../type/HitungTotalHarga";
import Image from "../../assets/svg/image.svg"

export default function InsideItemCart() {
    const totalHarga = HitungTotalHarga(data).toLocaleString('id-ID')

    console.log(totalHarga)

    return ( 
        <div className="px-5 mt-5">
            <Bar iconL={house} iconR={map} title="Jl. Pulau Ambon No.8" desc="Denpasae Barat, Bali" />

            <div className="mt-10">
                <h1 className="sm-semibold text-text-label">Sampah Umum</h1>
            </div>

            <div className="flex flex-col gap-5 mt-4">
                {data.map((item, i) => (
                    <div key={i}>
                        <Bar iconL={Image} title={item.namaBarang + " " +item.variant} desc={item.harga + " coin"} />
                    </div>
                ))}
            </div>
        </div>
    )
}