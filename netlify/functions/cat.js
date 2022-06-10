import axios from 'axios'
const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';
exports.handler = async (event, context) => {
    let data1 =[];
    axios.get(API_ENDPOINT,{
        headers: {
                "Accept": "application/json",
        }
    }).then(function (response) {
       data1 = response.data;
       console.log(data1);

    })
    .catch(function (error) {
        return {
            statusCode: 422,
            body: `Error: ${error}`
        }
    });
    return data1;
}
