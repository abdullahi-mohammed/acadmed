import SelectField from "../selectField/selectField"

export default function Assessments ({ data, setData }) {

    const bloodGroups = [
        { id: 0, value: "A-" },
        { id: 1, value: "A+" },
        { id: 2, value: "B-" },
        { id: 3, value: "B+" },
        { id: 4, value: "AB-" },
        { id: 5, value: "AB+" },
        { id: 6, value: "O-" },
        { id: 7, value: "O+" },
        { id: 8, value: "Not Sure" },
    ]
    
    const weightRanges = [
        { id: 0, value: "2-3 kg" },
        { id: 1, value: "12-18 kg" },
        { id: 2, value: "18-30 kg" },
        { id: 3, value: "30-50 kg" },
        { id: 4, value: "50-70 kg" },
        { id: 5, value: "70-100 kg" },
        { id: 6, value: "Not Sure" },
    ];

    const fitnessFrequencies = [
        { id: 0, value: "Never" },
        { id: 1, value: "Less than once a week" },
        { id: 2, value: "1-2 times a week" },
        { id: 3, value: "3-4 times a week" },
        { id: 4, value: "5-6 times a week" },
        { id: 5, value: "Daily" },
      ];
      

    const handleField = (text, value) => {
        setData({ ...data, [text]: value })
    }
    
    return (
        <div>
            <div className="flex flex-col rounded-[15px] border border-gray-500/[0.1] my-4">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 dark:bg-slate-100/[0.04] rounded-t-[15px]">Current Weight (kg)</p>
                <div className="gap-4 px-6">
                    <SelectField text={"weight"} action={handleField} value={data?.weight} options={weightRanges}/>
                </div>
            </div>

            <div className="flex flex-col rounded-[15px] border border-gray-500/[0.1] my-4">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 dark:bg-slate-100/[0.04] rounded-t-[15px]">Fitness Level (How often do you take exercises)</p>
                <div className="gap-4 px-6">
                    <SelectField text={"fitness"} action={handleField} value={data?.fitness} options={fitnessFrequencies}/>
                </div>
            </div>

            <div className="flex flex-col rounded-[15px] border border-gray-500/[0.1] my-4">
                <p className="font-medium p-4 px-6 border border-transparent border-b-gray-500/[0.1] bg-gray-100 dark:bg-slate-100/[0.04] rounded-t-[15px]">Blood Group</p>
                <div className="gap-4 px-6">
                    <SelectField text={"blood"} action={handleField} value={data?.blood} options={bloodGroups}/>
                </div>
            </div>

        </div>
    )
}