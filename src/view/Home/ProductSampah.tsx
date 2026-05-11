import products from "../../data/ProductData.json"
import ProductCard from "../../components/common/ProductCard"
import plus from "../../assets/svg/plus.svg";

export default function ProdctList() {
    return (
        <div className="mb-32.5">
            <div className="flex flex-row flex-wrap justify-between gap-y-10 relative">
                {products.map(product => (
                    <div className="relative">
                        <button className="p-2.5 border-2 border-border-default rounded-full absolute top-8 right-3 bg-surface-page z-10"><img src={plus} alt="add" /></button>
                        <ProductCard key={product.id} {...product} />
                    </div>
                ))}
            </div>
        </div>
    )
}