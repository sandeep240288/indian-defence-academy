// const fetch = require("node-fetch");
const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';
exports.handler = async (event, context) => {
  try {
        let options = {
            headers: {
                "Accept": "application/json",
            }
         };
        const response = await fetch(API_ENDPOINT,options);
        const data = await response.json();
        console.log(data);
        return data;
      }catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data' }),
        };
     }
};