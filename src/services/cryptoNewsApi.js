import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'b1362c9901mshc2d39e104bbe13ap1560dfjsn450a61487a86'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory ,count}) => {
            console.log(newsCategory);
            console.log(count);
            return ({
                url: `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
                method: 'GET',
                headers: cryptoNewsHeaders,
                count: count
                })
            }
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news/search',
//   params: {q: '<REQUIRED>', safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day'},
//   headers: {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': 'b1362c9901mshc2d39e104bbe13ap1560dfjsn450a61487a86'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });