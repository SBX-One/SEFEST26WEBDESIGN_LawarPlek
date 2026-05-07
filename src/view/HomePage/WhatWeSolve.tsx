import WWSCard from "../../components/RigoCard"
import LogoPill from "../../components/LogoPill"
import CustomClassFunction from "../../function/CustomClassFunction"

export default function WhatWeSolve() {
    CustomClassFunction({CustomWidth: 768, CustomClass: "leading-normal", divRef:"WWSPara", RemoveCustomClass: "md-default"});

    const WWSCardData = [
        {
            title: "Total Volume Sampah",
            date: "Tahun 2024 s/d 2025",
            volume: "+65M",
            desc: "Ton Sampah"
        },
        {
            title: "Peningkatan Volume Sampah",
            date: "Tahun 2023 s/d 2025",
            volume: "+15%",
            desc: "Peningkatan Volume Sampah"
        },
        {
            title: "Sampah Terdaur Ulang",
            date: "Tahun 2023 s/d 2025",
            volume: "<10%",
            desc: "Sampah Terdaur Ulang"
        },

    ]

    return (
        <div>
            <LogoPill text="What We Solve" />
            <div className="flex flex-col gap-6 mt-4 pb-16 border-b border-border-default">
                <h1 className="h1-heading font-medium text-text-heading">Sampah terus meluap dengan pengelolaan konvensional.</h1>
                <p id="WWSPara" className="md-default text-text-placeholder">
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