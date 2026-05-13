export default function LoadBar() {
    return (
        <div className="w-full h-5 bg-neutral-white border-2 relative border-border-default rounded-full mt-5">
            <div className="w-1/2 h-5 bg-surface-primary border-2 border-border-action-hover rounded-full"></div>
            <div className="bg-neutral-white border-2 border-border-default w-fit rounded-full relative -top-8 left-1/3">
                <h1 className="label-semibold text-text-label px-5 py-3.75">~ 12 Menit</h1>
            </div>
        </div>
    )
}