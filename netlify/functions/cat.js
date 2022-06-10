// const nodeFetch = require('node-fetch') as typeof fetch;

// import fetch from 'node-fetch';
import axios from 'axios'

const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';
exports.handler = async (event, context) => {
  try {
    let options = {
        headers: {
            "Accept": "application/json",
        }
    };
    const response = await axios.get(API_ENDPOINT,{},options);
    return response;
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
}