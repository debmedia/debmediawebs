export const calcReadingTime = (text) => {
    const averageWordsPerMinute = 200;
    try {
        const words = text.match(/\S+/g).length;
        return Math.ceil(words / averageWordsPerMinute);
    } catch(err){
        if(process.env.NEXT_PUBLIC_NODE_ENV === 'development') console.error("[calcReadingTime]: " + err.message);
        return 5; // devolvemos 5 para que muestre algo
    }
};
