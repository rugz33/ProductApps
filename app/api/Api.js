export default () => {
  const URL = "http://private-deaad0-productsapi14.apiary-mock.com/products";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}
