
export const infermedica = (sex, age, interviewId) => {
    const URL = "https://api.infermedica.com/v3/diagnosis"
    const body = {
        sex,
        age: {
            value: age
        },
        evidence: [
            {
                "id": "s_1193",
                "choice_id": "present",
                "source": "initial"
            },
            {
                "id": "s_488",
                "choice_id": "present"
            },
            {
                "id": "s_418",
                "choice_id": "present"
            }
        ]
    }

    fetch(URL, {
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
    .then(response => {
        return response
    })
    .catch(error => {
        console.log(error)
    })
}
