export const calcReadingTime = (text) => {
    const averageWordsPerMinute = 200;
    const words = text.match(/\S+/g).length;
    return Math.ceil(words / averageWordsPerMinute);
};
