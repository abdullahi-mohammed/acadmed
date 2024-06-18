import { useContext, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { AuthContext } from "../../customHooks/useAuth";
import InputField from "../inputField/inputField";
import SelectField from "../selectField/selectField";
import { SchedulesContext } from "../../context/scheduleContext";
import Popup from "../popup/popup";

export default function NewSchedule({ schedule }) {
  const { user } = useContext(AuthContext);
  const { addSchedule, updateSchedule, loading, popup, setPopup } = useContext(SchedulesContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [durationStart, setDurationStart] = useState("");
  const [durationEnd, setDurationEnd] = useState("");
  const [status, setStatus] = useState("pending");
  const [description, setDescription] = useState("");


  useEffect(() => {
    if(schedule) {
      setTitle(schedule.title)
      setDate(schedule.date.split("T")[0])
      setStatus(schedule.status)
      setDescription(schedule.description)
      setDurationStart(schedule.duration.split(",")[0])
      setDurationEnd(schedule.duration.split(",")[1])
    }
  }, [schedule])

  const handleStatus = (type, value) => {
    setStatus(value)
  }

  return (
    <>
        {
            popup?.msg ?
            <Popup type={popup?.type} msg={popup?.msg} setError={setPopup} redirectUrl={popup?.type === "error" ? "#" : "#"} />
            :
            ""
        }
        
        <form className="flex flex-col max-w-[300px] bg-white dark:bg-black w-full">
            <InputField text={"title"} action={setTitle} value={title} type={"text"} />
            <InputField text={"Date"} action={setDate} value={date} type={"date"} />

            <div className="grid grid-cols-2 gap-2">
                <InputField text={"Start Time"} action={setDurationStart} value={durationStart} type={"time"} />
                <InputField text={"End Time"} action={setDurationEnd} value={durationEnd} type={"time"} />
            </div>

            <SelectField text={"Status"} action={handleStatus} value={status} options={[{id: 0, value: "Pending"}, {id: 1, value: "Upcoming"},{id: 2, value: "On-hold"}, {id: 3, value: "Completed"}, ]} />

            <InputField text={"Description"} action={setDescription} value={description} type={"text"} />

            <button type="button" className="p-2 w-full bg-purple text-white rounded"
                onClick={() => 
                    schedule ?
                    updateSchedule(schedule.id, { user: user?.email, title, description, duration: durationStart + "," + durationEnd, status, date })
                    :
                    addSchedule({ user: user?.email, title, description, duration: durationStart + "," + durationEnd, status, date })
                }
            >
                {loading ? <FaSpinner className="animate-spin text-[20px]" /> : "Submit"}
            </button>

        </form>
      
    </>
  );
}
