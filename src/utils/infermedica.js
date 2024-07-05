
export const infermedica = async (sex, age, interviewId, evidence) => {
    const URL = "https://api.infermedica.com/v3/diagnosis"
    const body = {
        sex,
        age: {
            value: age
        },
        evidence
    }

    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "App-Id": import.meta.env.VITE_INFERMEDICA_APP_ID,
            "App-Key": import.meta.env.VITE_INFERMEDICA_API_KEY,
            "Content-Type": "application/json",
            "Interview-Id": interviewId,
            "Dev-Mode": "true"
        },
        body: JSON.stringify(body)
    })
    const result = await response.json()
    return result
}

export const infermedicaSymptoms = async () => {
    const URL = "https://api.infermedica.com/v3/concepts?types=symptom"

    const response = await fetch(URL, {
        method: "GET",
        headers: {
            "App-Id": import.meta.env.VITE_INFERMEDICA_APP_ID,
            "App-Key": import.meta.env.VITE_INFERMEDICA_API_KEY,
            "Dev-Mode": "true"
        },
    })
    const result = await response.json()
    return result
}

