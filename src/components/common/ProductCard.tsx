import type { ProductCardProps } from "../../type/type"
import { getProductionImageMap } from "../../type/useProductImage";

const imageMap = getProductionImageMap();
console.log('image map keys: ', Object.keys(imageMap));
console.log('image prop: ', Image)

export default function ProductCard({ img, title, harga }: ProductCardProps) {
    const src = imageMap[img] ?? '/placeholder.webp';
    const hargaDone = harga.toLocaleString('id-ID');
    return (
        <div className="text-text-body w-37.5 h-48.75 justify-center flex flex-col items-center mt-5">
            <div className="bg-surface-default w-full h-36 flex items-center justify-center rounded-sm border-2 border-border-default mb-3 transition-all duration-200 hover:bg-surface-disabled">
                <img src={src} alt={title} className="relative h-29" />
            </div>
            <div className="text-left justify-start flex flex-col mr-auto">
                <p className="sm-semibold text-text-heading">{'Rp.' + hargaDone}</p>
                <h3 className="text-text-placeholder xs-default">{title}</h3>
            </div>
        </div>
    )
}