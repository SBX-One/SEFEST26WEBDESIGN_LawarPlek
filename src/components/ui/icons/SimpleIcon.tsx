import type { SimpleIconProps } from "../../../type/type"

export default function SimpleIcon({ icon, iconWidth, border = true }: SimpleIconProps) {
    return (
        <div className={`p-3.5 ${border ? "border-2 border-border-default" : ""} rounded-2xl w-fit`}>
            <img src={icon} alt="icon" style={{ width: iconWidth }} />
        </div>
    )
}