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
       data1 = JSON.stringify(response.data);
       console.log(data1);
       console.log('inside axios');

    })
    .catch(function (error) {
        return {
            statusCode: 422,
            body: `Error: ${error}`
        }
    });
    return data1;
}
