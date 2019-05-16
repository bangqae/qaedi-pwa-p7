/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// helper functions ----------

// if (!('fetch' in window)) {
//   console.log('Fetch API not found, try including the polyfill');
//   return;
// }
function readResponseAsBlob(response) {
  return response.blob();
}

function readResponseAsJSON(response) { //fungsi read response
  return response.json();
}
  
function validateResponse(response) { //fungsi validate response
  if (!response.ok) { //apabila bad response
    throw Error(response.statusText); //buat response error
  }
  return response; //tampilkan error
}

function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem:', error);
}

function showImage(responseAsBlob) { //fungsi menampilkan image
  var container = document.getElementById('img-container'); //id di file html
  var imgElem = document.createElement('img'); //format file
  container.appendChild(imgElem);
  var imgUrl = URL.createObjectURL(responseAsBlob);
  imgElem.src = imgUrl;
}
  
function showText(responseAsText) { //fungsi menampilkan response text
  var message = document.getElementById('message');
  message.textContent = responseAsText;
}  

// Fetch JSON ----------

function fetchJSON() {
  // TODO
  fetch('examples/animals.json') //mengambil data dari file json
  .then(validateResponse) //gunakan fungsi validasi untuk mengecek bad response, dan agar log error tidak panjang
  .then(readResponseAsJSON) //gunakan fungsi read response
  .then(logResult) //gunakan fungsi result untuk menampilkan hasil, jika berhasil
  .catch(logError); //gunakan fungsi error untuk menpilkan error, jika ada
}
const jsonButton = document.getElementById('json-btn');
jsonButton.addEventListener('click', fetchJSON);


// Fetch Image ----------

function fetchImage() {
  // TODO
  fetch('examples/kitten.jpg')
  .then(validateResponse)
  .then(readResponseAsBlob)
  .then(showImage)
  .catch(logError);

  
}
const imgButton = document.getElementById('img-btn');
imgButton.addEventListener('click', fetchImage);


// Fetch text ----------

function fetchText() {
  // TODO
}
const textButton = document.getElementById('text-btn');
textButton.addEventListener('click', fetchText);


// HEAD request ----------

// function headRequest() {
//   // TODO
// }
// const headButton = document.getElementById('head-btn');
// headButton.addEventListener('click', headRequest);


// POST request ----------

/* NOTE: Never send unencrypted user credentials in production! */
// function postRequest() {
//   // TODO
// }
// const postButton = document.getElementById('post-btn');
// postButton.addEventListener('click', postRequest);
