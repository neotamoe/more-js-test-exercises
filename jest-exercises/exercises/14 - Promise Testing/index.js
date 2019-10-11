import fetch from 'node-fetch';
import { parse } from 'querystring';

export const LOCATION_ORIGIN = (() => {
  if (typeof window !== 'undefined' && window.location !== 'undefined') {
    const url = window.location.origin ||
      window.location.protocol +
        '//' +
        window.location.hostname +
        (window.location.port ? ':' + window.location.port : '');
    if (url.toString() !== 'null') {
      return url;
    }
  }
  return 'http://localhost';
})();

export const defaultFetchHeaders = {
  compress: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const camelCase = input => {
  // TODO: implement
};

const normalizeCasing = value => {
  // TODO: implement
};

const callApi = (url = '', options = {}) => {
  // TODO: implement - NOT yet working
  return fetch(LOCATION_ORIGIN+url, defaultFetchHeaders)
    .then(resp => { return resp.json() })
    .then(json => { 
      const results = { json: json, resp: json }; 
      return results 
    })
};

export default callApi;
