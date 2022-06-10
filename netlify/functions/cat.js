import axios from 'axios'

exports.handler = async (event, context) => {
    let data =[];
    axios.get(API_ENDPOINT)
    .then(function (response) {
       data = response.data;
    })
    .catch(function (error) {
        return {
            statusCode: 422,
            body: `Error: ${error}`
        }
    });
    return data;
}
