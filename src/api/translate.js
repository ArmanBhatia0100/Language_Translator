export const translate = async (text, from, to) => {
    if(from === "english") {
        from = "en";
    } else if(from === "french") {
        from = "fr";
    }

    if(to === "english") {
        to = "en";
    } else if(to === "french") {
        to = "fr";
    }
    const langpair = `${from}|${to}`;

    const data = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${langpair}`).then((response) => response.json()).then((data) => 
         data.responseData.translatedText);
    return data;
}