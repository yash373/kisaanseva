const translate = async (targetLanguage: string, text: string) => {
    const source = "en"

    const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';

    if (targetLanguage != "en") {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': '2010442decmshc62de9e7247e8e1p15b96cjsn1cf015d3184b',
                    'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    q: text,
                    source,
                    target: targetLanguage
                })
            });
            const result = await response.json();
            return (result["data"]["translations"]["translatedText"]);
        } catch (error) {
            console.log("An Error Occured")
            console.error(error);
        }
    }else{
        return text
    }

}

translate("fr","hello")

export { translate }