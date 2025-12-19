
import { GoogleGenAI } from "@google/genai";
import { EQUIPMENT_LIST } from "../constants";

const SYSTEM_INSTRUCTION = `
Ты — профессиональный консультант по фото и видео технике в сервисе PixelRent.
Твоя задача — помогать пользователям выбирать оборудование под их задачи (свадьбы, интервью, блоги, кино).

Вот список доступного оборудования:
${EQUIPMENT_LIST.map(item => `- ${item.name} (${item.brand}, ${item.category}): ${item.description} Цена: ${item.pricePerDay} руб/сут`).join('\n')}

Правила общения:
1. Будь вежливым и профессиональным.
2. Давай конкретные рекомендации из списка.
3. Объясняй, почему ты советуешь именно это.
4. Если пользователь спрашивает про цену, указывай её.
5. Отвечай на русском языке.
6. Если нужно оборудование, которого нет в списке, вежливо предложи ближайшую альтернативу из доступного.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateResponse(prompt: string, history: { role: 'user' | 'assistant', content: string }[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
          { role: 'user', parts: [{ text: prompt }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "Извините, я не смог обработать ваш запрос.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Произошла ошибка при связи с нейропомощником. Пожалуйста, попробуйте позже.";
    }
  }
}

export const geminiService = new GeminiService();
