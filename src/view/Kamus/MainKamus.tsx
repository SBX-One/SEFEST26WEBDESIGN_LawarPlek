import DataKamus from "../../data/Kamus.json"
import imageP1 from "../../assets/webP/Product/imageP1.webp"
import imageP2 from "../../assets/webP/Product/imageP2.webp"
import imageP3 from "../../assets/webP/Product/imageP3.webp"
import { useNavigate } from "react-router-dom"
import { useTrash } from "../../context/TrashContext"
import type { KamusItem } from "../../context/TrashContext"
import Search from "../../components/common/Search"
import SimpleIcon from "../../components/ui/icons/SimpleIcon"
import setting from "../../assets/svg/settings-2.svg"

const imageMap: { [key: string]: string } = {
    "imageP1.webp": imageP1,
    "imageP2.webp": imageP2,
    "imageP3.webp": imageP3,
}

export default function MainKamus({ searchBar = true }: { searchBar?:boolean }) {
    const navigate = useNavigate()
    const { setChosenKamus } = useTrash();

    const getImagePath = (imgName: string) => {
        const fileName = imgName.split('/').pop() || imgName
        return imageMap[fileName] || imageP1
    }

    function handleKamusDetail(x: KamusItem) {
        setChosenKamus(x);
        navigate(`/Kamus/${x.title}`)
    }

    return (
        <div className="md:mt-10 desktop:-mt-18">
            {searchBar && (
                <div className="md:flex flex-row gap-5 hidden">
                    <Search />
                    <SimpleIcon icon={setting} iconWidth={16} text="Filter" textClass="label-semibold text-text-label" />
                </div>
            )}
            <div className="bg-neutral-white grid grid-cols-1 md:grid-cols-2 desktop:grid-cols-3 gap-5 mb-30 mt-5 md:mt-10 ">
                {DataKamus.map((item, i) => (
                    <div key={i} onClick={() => handleKamusDetail(item)} className="border-2 border-border-default rounded-2xl p-5 flex flex-col gap-5">
                        <div className="border-b-2 border-border-default -mx-5 px-5 pb-5 flex flex-col gap-1.5">
                            <h1 className="text-text-heading sm-semibold font-bold">{item.title}</h1>
                            <h1 className="text-text-placeholder xs-default">{item.para}</h1>
                        </div>

                        <div className="flex flex-row gap-3">
                            {/* 1. Ambil maksimal 4 item saja untuk ditampilkan */}
                            {item.product.slice(0, 3).map((prod, idx) => {
                                const isLastVisible = idx === 2;
                                const hasMore = item.product.length > 2;

                                return (
                                    <div key={idx} className="relative h-15 w-15 border-2 border-border-default overflow-hidden rounded-sm flex items-center justify-center bg-neutral-white">
                                        {/* Jika ini posisi ke-4 dan ada sisa produk, tampilkan overlay teks */}
                                        {isLastVisible && hasMore ? (
                                            <div className="absolute inset-0 bg-neutral-white flex flex-col items-center justify-center z-10">
                                                <span className="text-text-label font-bold sm-semibold">+{item.product.length - 3}</span>
                                                <span className="text-text-placeholder xs-default">Produk</span>
                                            </div>
                                        ) : null}

                                        {/* Gambar tetap dirender di background jika index < 3, 
                                            atau jika index 3 tapi tidak ada "hasMore" */}
                                        <img src={getImagePath(prod.img)} alt={prod.id.toString()} className="w-15 h-15 object-top object-cover overflow-hidden px-2.5 pt-2.5"/>
                                    </div>
                                );
                            })}
                        </div>

                        <h1 className="xs-default text-text-placeholder">{item.desc}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}