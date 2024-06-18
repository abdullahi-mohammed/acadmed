import { GoogleGenerativeAI } from "@google/generative-ai";

export const askGemini = async (prompt) => {

    // Fetch your API_KEY
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    // Access your API key (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContent( prompt );
    const response = await result.response;
    return response.text();

}
