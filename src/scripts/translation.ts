const fetch = require('node-fetch');

const translate = async (targetLanguage: string, text: string) => {
    const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '2010442decmshc62de9e7247e8e1p15b96cjsn1cf015d3184b',
            'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: {
            q: text,
            source: 'en',
            target: targetLanguage
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

export { translate }