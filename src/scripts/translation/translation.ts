const translate = async (targetLanguage: string, text: string) => {
    const source = "en"

    const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=${targetLanguage}&from=${source}&textType=plain`;

    try {
        const response = await fetch(url, {
            method:"POST",
            headers: {
                'x-rapidapi-key': '2010442decmshc62de9e7247e8e1p15b96cjsn1cf015d3184b',
                'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([
                {
                    text:text
                }
            ])
        });
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.log("An Error Occured")
        console.error(error);
    }
}

translate("fr","hello")

export { translate }