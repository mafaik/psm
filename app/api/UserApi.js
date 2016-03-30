export default function get(url,callback) {
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(url);
    console.log(data);
    callback(data);
  }).catch(function(err) {
    console.log(url);
    console.log('Error ', err);
  });
}