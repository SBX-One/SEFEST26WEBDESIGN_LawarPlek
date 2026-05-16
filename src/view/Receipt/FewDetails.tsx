import Bar from "../../components/common/Bar";
import Home from "../../assets/svg/house.svg";
import Map from "../../assets/svg/map.svg";
import ButtonPill from "../../components/ui/button/ButtonPill";     

export default function FewDetails() {
    return (
        <div className="mt-20">
            <div className="relative">
                <div className="absolute top-5.5 right-5 hidden md:block">
                    <ButtonPill disabledd={true} text="Ubah Lokasi" />
                </div>
                <Bar iconL={Home} iconR={Map} title="Jln Pulau Ambon No.9" desc="Denpasar Barat, Bali" />
            </div>
            <div className="mt-5 w-full flex flex-row justify-between border-2 border-border-default rounded-2xl text-center">
                <div className="border-r-2 border-border-default w-1/2 py-5 flex flex-col gap-1">
                    <h1 className="xs-default text-text-placeholder">Penjemput</h1>
                    <p className="sm-semibold text-text-body">Dyven Siauw</p>
                </div>
                <div className="w-1/2 py-5 flex flex-col gap-1">
                    <h1 className="xs-default text-text-placeholder">Plat Nomor</h1>
                    <p className="sm-semibold text-text-body">DK 1001 DHY</p>
                </div>
            </div>
        </div>
    )
}