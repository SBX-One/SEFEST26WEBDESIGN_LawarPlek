import map from "../../assets/webP/image_map.webp"
import scan from "../../assets/webP/image_scan.webp"
import clean from "../../assets/webP/image_clean_your_trash.webp"

export default function Bantuan() {
    const BantuanList = [
        {
            image : map,
            text: "Clean your trash"
        },
        {
            image : scan,
            text: "Clean your trash"
        },
        {
            image : clean,
            text: "Clean your trash"
        },
    ]

    return (
        <div className="mt-10 overflow-hidden">
            <h1 className="sm-semibold text-text-body mb-4">Bantuan & Panduan</h1>

            <div className="flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide snap-always gap-4 -scroll-pl-5 ">
                {BantuanList.map((item, i) => (
                    <div key={i} className="shrink-0 snap-center ">
                        <img src={item.image} alt={item.text} className="h-31.5 rounded-2xl mb-2" />
                        <p className="text-text-label">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}