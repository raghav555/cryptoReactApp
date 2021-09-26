import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'd51adb557amsh2aa5a154b3b9986p12feb3jsnb2f7bde10e48'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => {
            return ({
                url: `/coins?limit=${count}`,
                method: 'GET',
                headers: cryptoApiHeaders,
                count: count
                })
            }
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => {
            return ({
                url: `/coins/${coinId}`,
                method: 'GET',
                headers: cryptoApiHeaders,
                })
            }
        }),
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchanges',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': 'd51adb557amsh2aa5a154b3b9986p12feb3jsnb2f7bde10e48'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log("in correct");
//     console.log(response.data);
// }).catch(function (error) {
//     console.log("in this error");
// 	console.error(error);
// });