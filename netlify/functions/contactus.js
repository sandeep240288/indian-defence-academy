import axios from 'axios'
const options ={ 
  baseURL: "https://whispering-stream-89457.herokuapp.com" ,
  headers:{ 
    token:process.env.MY_API_KEY,
    "Accept": "application/json",
  } 
};

exports.handler = async (event, context) => {
    const x = event.body;
    // return axios.post('/api/contactus',x,options).then(function (response) {
    //     return { statusCode: 200, body: JSON.stringify(response.data) };
    // }).catch(function (error) {
    //     return {
    //         statusCode: 422,
    //         body: `Error: ${error}`
    //     }
    // });
    return x
}
