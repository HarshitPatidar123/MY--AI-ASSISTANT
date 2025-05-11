import { GoogleGenerativeAI } from "@google/generative-ai"


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are a chatbot who is expert in everything`
});


export const generateResult = async (prompt) => {

    const result = await model.generateContent(prompt);

    return result.response.text()
}




//console.log(result.response.text());