import LoadBar from "../../components/common/LoadBar"

const EstTime = ({ title, time }: {title: string, time: string}) => {
    return (
        <div>
            <h3 className="sm-default text-text-placeholder">{title}</h3>
            <p className="h2-heading text-text-heading">{time}</p>
        </div>
    )
}
export default function EstimateTime() {

    const EstList = [
        {
            title: "Berangkat",
            time: "09:42"
        },
        {
            title: "Sampai",
            time: "09:54"
        }
    ]
    
    return (
        <div>
            <div className="flex flex-row justify-between mt-10">
                {EstList.map((item, i) => (
                    <div className="min-w-36.5 flex justify-center" key={i}>
                        <EstTime {...item} />
                    </div>
                ))}
            </div>
            <LoadBar />
        </div>
    )
}