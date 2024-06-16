import InputField from "../inputField/inputField"

export default function Assessments ({ data, setData }) {
    
    const handleWeight = (weight) => {
        setData({ ...data, weight })
    }
    return (
        <div>
            <div className="flex flex-col rounded-[15px] bg-slate-100/[0.5] border border-gray-500/[0.1] my-4">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 rounded-t-[15px]">Current Weight</p>
                <div className="gap-4 px-6">
                    <InputField action={handleWeight} value={data.weight} type={"text"}/>
                </div>
            </div>

            <div className="flex flex-col rounded-[15px] bg-slate-100/[0.5] border border-gray-500/[0.1] my-4">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 rounded-t-[15px]">Fitness Level (How often do you take exercises)</p>
                <div className="gap-4 px-6">
                    <InputField action={handleWeight} value={data.fitness} type={"text"}/>
                </div>
            </div>

            <div className="flex flex-col rounded-[15px] bg-slate-100/[0.5] border border-gray-500/[0.1] my-4">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 rounded-t-[15px]">Blood Group</p>
                <div className="gap-4 px-6">
                    <InputField action={handleWeight} value={data.blood} type={"text"}/>
                </div>
            </div>

        </div>
    )
}