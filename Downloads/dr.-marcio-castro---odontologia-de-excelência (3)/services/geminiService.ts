
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userMessage: string, history: { role: string; parts: { text: string }[] }[]) => {
  if (!API_KEY) {
    return "Desculpe, o assistente está temporariamente indisponível. Por favor, entre em contato via WhatsApp.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'assistant' ? 'model' : 'user', parts: [{ text: h.parts[0].text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `Você é o Assistente Virtual da clínica do Dr. Marcio Castro, um dentista renomado especializado em odontologia estética, implantes e reabilitação oral.
        Seu tom deve ser profissional, empático, acolhedor e informativo. 
        Objetivos:
        1. Explicar serviços como: Facetas de Resina/Porcelana, Implantes Dentários, Clareamento, Ortodontia Invisível e Reabilitação.
        2. Encorajar o agendamento de uma consulta de avaliação.
        3. Responder dúvidas básicas sobre higiene e tratamentos sem dar diagnóstico médico definitivo.
        4. Sempre mencione que o Dr. Marcio Castro utiliza tecnologias de ponta.
        Idioma: Português do Brasil.`,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "Desculpe, não consegui processar sua resposta agora.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.";
  }
};
