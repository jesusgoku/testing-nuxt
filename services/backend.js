import axios from 'axios';

import News from '../models/news';


function request(userOptions) {
  return axios({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...userOptions,
  });
}

function extractDataFromResponse(res) {
  return res.data;
}

function makeItemToModelTransform(Model) {
  return function itemToModelTransform(data) {
    return Model.fromAPI(data);
  }
}

function makeCollectionOfModelTransform(Model) {
  return function collectionOfModelTransform(data) {
    return data.map(makeItemToModelTransform(Model));
  }
}

export function getNews(params = {}) {
  return request({
    params,
    url: '/posts',
  })
    .then(extractDataFromResponse)
    .then(makeCollectionOfModelTransform(News))
  ;
}

export function getNew(id, params = {}) {
  return request({
    ...params,
    url: `/posts/${id}`,
  })
    .then(extractDataFromResponse)
    .then(makeItemToModelTransform(News))
  ;
}
