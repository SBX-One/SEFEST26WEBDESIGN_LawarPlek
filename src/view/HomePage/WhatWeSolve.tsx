import WWSCard from "../../components/RigoCard"
import LogoPill from "../../components/LogoPill"

export default function WhatWeSolve() {
    const WWSCardData = [
        {
            title: "Total Volume Sampah",
            date: "Tahun 2024 s/d 2025",
            volume: "+65M",
            desc: "Ton Sampah",
            content: "text"
        },
        {
            title: "Peningkatan Volume Sampah",
            date: "Tahun 2023 s/d 2025",
            volume: "+15%",
            desc: "Peningkatan Volume Sampah",
            content: "text"
        },
        {
            title: "Sampah Terdaur Ulang",
            date: "Tahun 2023 s/d 2025",
            volume: "<10%",
            desc: "Sampah Terdaur Ulang",
            content: "text"
        },

    ]

    return (
        <div>
            <LogoPill />
            <div className="flex flex-col gap-6 mt-4 pb-16 border-b border-border-default">
                <h1 className="h1-heading font-medium text-text-heading">Sampah terus meluap dengan pengelolaan konvensional.</h1>
                <p className="md-default text-text-placeholder">
                    Volume sampah terus meningkat, namun sistem pengelolaan masih konvensional.
                </p>
            </div>
            <div className="flex flex-col gap-5 mt-10">
                {WWSCardData.map((data, i) => (
                    <WWSCard key={i} {...data} />
                ))}
            </div>
        </div>
    )
}