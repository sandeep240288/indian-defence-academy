// const nodeFetch = require('node-fetch') as typeof fetch;

// import fetch from 'node-fetch';
import axios from 'axios'

const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';
exports.handler = async (event, context) => {
    const result = axios.get(API_ENDPOINT)
    .then(function (response) {
        return JSON.stringify(response.data)
    })
    .catch(function (error) {
        return {
        statusCode: 422,
        body: `Error: ${error}`
        }
   });
}
