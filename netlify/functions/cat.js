import axios from 'axios'
const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';

console.log('Outside Handler');
exports.handler = async (event, context) => {
    let data1 =[];
    console.log(API_ENDPOINT);
    axios.get(API_ENDPOINT,{
        headers: {
                "Accept": "application/json",
        }
    }).then(function (response) {
     
       console.log('inside axios');

        return { statusCode: 200, body: JSON.stringify(response.data) };

    })
    .catch(function (error) {
        return {
            statusCode: 422,
            body: `Error: ${error}`
        }
    });
    return data1;
}
