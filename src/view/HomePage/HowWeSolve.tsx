import LogoPill from "../../components/LogoPill"
import RigoImageCard from "../../components/RigoImageCard"

import image1 from "../../assets/webP/HowWeSolveImage1.webp"
import image2 from "../../assets/webP/HowWeSolveImage2.webp"
import image3 from "../../assets/webP/HowWeSolveImage3.webp"
import image4 from "../../assets/webP/HowWeSolveImage4.webp"

export default function HowWeSolve() {
    const HWSCardData = [
        {
            title: "Penjemputan Aktif & Instant",
            date: "Kurir kami yang datang jemput ke depan pintu.",
            image: image1,
            customImageClass: "py-8.25 px-5"
        },
        {
            title: "Penjemputan Aktif & Instant",
            date: "Kurir kami yang datang jemput ke depan pintu.",
            image: image2,
            customImageClass: "py-3 absolute h-49.5 w-135.25 object-cover"
        },
        {
            title: "Penjemputan Aktif & Instant",
            date: "Kurir kami yang datang jemput ke depan pintu.",
            image: image3,
            customImageClass: "object-cover absolute bottom-6 ml-8.5"
        },
        {
            title: "Penjemputan Aktif & Instant",
            date: "Kurir kami yang datang jemput ke depan pintu.",
            image: image4,
            customImageClass: "w-190.75 h-45 mt-4 object-cover absolute"
        },
    ]

    return (
        <div>
            <div className="flex flex-col gap-6 pb-16 border-b border-border-default mt-32">
                <div className="w-fit mx-auto">
                    <LogoPill text="How We Solve" />
                </div>
                <h1 className="h1-heading text-text-heading text-center">
                    Platform Praktis <br /> Mengubah <br /> Sampah Rumah  Menjadi Saldo Belanja
                </h1>
            </div>
            <div className="flex flex-col gap-5 ">
                {HWSCardData.map((data, i) => (
                    <RigoImageCard key={i} {...data} />
                ))}
            </div>
            
        </div>
    )
}