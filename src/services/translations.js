import { translate } from "../api/translate";

export const translateText = async (text, from, to) => {
    const translatedText = await translate(text, from, to);
    return translatedText;
}