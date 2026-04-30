import type { seperatorProps } from "./type"

export default function Seperator({ height }: seperatorProps) {
    return (
        <div>
            <div style={{ height: height}} className="w-full bg-diagonal-line border-2 absolute left-0 border-border-default" />
        </div>
    )
}