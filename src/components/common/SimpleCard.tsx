import type { SimpleCardProps } from "../../type/type"
import plus from "../../assets/svg/plus.svg"
import minus from '../../assets/svg/minus.svg'
import { useState } from "react"
import check from "../../assets/svg/stats-up.svg"

export default function SimpleCard({ title, desc, button = true, icon, numSampah, setNumSampah }: SimpleCardProps) {
    const [isActive, setIsActive] = useState<boolean>(true)

    const hadnleAdd = () => {
        setNumSampah(prev => prev + 1);
        setIsActive(false);
    }

    const handleSubtract = () => {
        setNumSampah(prev => {
            const newValue = prev - 1;
            if (newValue <= 0) {
                setIsActive(true);
                return 0;
            }
            return newValue;
        })
    }


    return (
        <div className="p-3 h-37.5 w-37.5 flex flex-col bg-neutral-white rounded-2xl border-2 border-border-default">
            <div className="flex flex-row-reverse">
                <img src={check} alt="stats" className="w-4 h-4" />
                <div className="flex flex-1 flex-col">
                    <h1 className="sm-semibold text-text-heading">{title}</h1>
                    <p className="xs-default text-text-placeholder">{desc}</p>
                </div>
            </div>
            {button && isActive ? (
                <div className="ml-auto mt-auto">
                    <button onClick={hadnleAdd} className="p-2.5 border-2 border-border-default rounded-2xl ">
                        {icon ? (
                            icon
                        ) : (
                            <img src={plus} alt="" />
                        )}
                    </button>
                </div>
            ) : (
                <div className="flex justify-between flex-row-reverse items-center mt-auto">
                    <button onClick={hadnleAdd} className="p-2.5 border-2 border-border-default rounded-2xl ">
                        <img src={plus} alt="plus" />
                    </button>
                    <p className="label-default text-text-body">{numSampah}</p>
                    <button onClick={handleSubtract} className="p-2.5 border-2 border-border-default rounded-2xl ">
                        <img src={minus} alt="minus" />
                    </button>
                </div>
            )} 
        </div>
    )
}