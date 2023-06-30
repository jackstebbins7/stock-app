import axios from 'axios';

const fetchInfo = async (term) => {
    const info = await axios.get('https://mboum-finance.p.rapidapi.com/qu/quote/financial-data', {
        headers: {
            'X-RapidAPI-Key': '8354bf8f26msh0eccb1512227f3dp11b5e4jsn2f1ba59adf75',
            'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
        },
        params: {
            symbol: term,
        }
    });
    //console.log(info.data.financialData.currentPrice.fmt);
    //let report = info.data.financialData.currentPrice.fmt;
    let infoList = [info.data.financialData.currentPrice.fmt,]
    return infoList;
};

export default fetchInfo;