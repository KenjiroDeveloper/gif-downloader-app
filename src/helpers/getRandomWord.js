import keywords from "../utils/keywords";

export const getRandomWord = () => {
    let randomIndex = Math.floor(Math.random() * keywords.length);
    return keywords[randomIndex];
}