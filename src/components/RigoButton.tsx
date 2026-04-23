import type { RIGOBTNPROPS } from "./type"

export default function RigoButton({ inv, text }: RIGOBTNPROPS) {
    return (
        <div className={`${inv ? "bg-black" : "bg-white"} w-100 h-100`}>
            <h1>Rigo Button</h1>
        </div>
    )
}