import axios from 'axios'
// const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';

const options ={ 
  baseURL: "https://whispering-stream-89457.herokuapp.com" ,
  headers:{ 
          token:'ZRfWX6ScXAb69l36Fre7sTNm4FHhZaq5mJX010vP',
          "Accept": "application/json",
  } 
};

console.log('Outside Handler');
exports.handler = async (event, context) => {
    console.log('Inside handler');
    return axios.get(API_ENDPOINT,options).then(function (response) {
     
       console.log('inside axios');

        return { statusCode: 200, body: JSON.stringify(response.data) };

    })
    .catch(function (error) {
        return {
            statusCode: 422,
            body: `Error: ${error}`
        }
    });
    
}
