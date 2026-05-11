import type { SimplePillProps } from "../../type/type";

export default function SimplePill({ text }: SimplePillProps) {
    return (
        <div>
            <h1 className="px-6 py-3.5 xs-semibold text-text-label border-2 border-border-default rounded-2xl w-fit">{text}</h1>
        </div>
    )
}