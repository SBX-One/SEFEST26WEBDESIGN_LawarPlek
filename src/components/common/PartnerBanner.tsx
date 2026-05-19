import { useEffect, useRef } from "react"
import gsap from "gsap"

import Partner1 from "../../assets/svg/Partner1.svg"
import Partner2 from "../../assets/svg/Partner2.svg"
import Partner3 from "../../assets/svg/Partner3.svg"
import Partner4 from "../../assets/svg/Partner4.svg"

const PartnerList: string[] = [Partner1, Partner2, Partner3, Partner4]

export default function PartnerBanner() {
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        // Tunggu render selesai baru ukur
        const ctx = gsap.context(() => {
            const singleSetWidth = track.scrollWidth / 2

            gsap.fromTo(
                track,
                { x: 0 },
                {
                    x: -singleSetWidth,
                    duration: 15,
                    ease: "none",
                    repeat: -1,
                    onRepeat: () => {
                        // Hard reset ke 0 setiap cycle — tidak ada drift
                        gsap.set(track, { x: 0 })
                    },
                }
            )
        }, trackRef)

        return () => ctx.revert()
    }, [])

    const doubled = [...PartnerList, ...PartnerList]

    return (
        <div className="h-36 w-screen left-0 ml-[calc(50%-50vw)] bg-neutral-white border-y-2 relative z-20 border-border-default overflow-hidden flex items-center">
            <div
                ref={trackRef}
                className="flex items-center gap-16 will-change-transform"
                style={{ width: "max-content" }}
            >
                {doubled.map((Partner, i) => (
                    <div key={i} className="shrink-0 px-8">
                        <img
                            src={Partner}
                            alt={`partner-${i}`}
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}