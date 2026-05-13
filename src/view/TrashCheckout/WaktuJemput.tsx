import DropDownBar from "../../components/common/DropDownBar";
import calendar from "../../assets/svg/calendar.svg"
import { useDatePicker } from "../../type/UseDatePicker";
import DateIput from "../../type/DateInput";

export default function WaktuJemput() {
    const { openDatePicker, inputRef, date, setDate } = useDatePicker();

    return (
        <div className="mt-8">
            <h1 className="sm-semibold text-text-label mb-4">Waktu Jemput</h1>
            <DateIput inputRef={inputRef} onChange={setDate} value={date} />
            <DropDownBar onclick={openDatePicker} icon={calendar} title={date ? new Date(date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : "Cari secepatnya"} />
        </div>
    )
}