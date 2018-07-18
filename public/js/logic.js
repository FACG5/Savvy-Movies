function fetchApi(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.responseText);
      cb(res);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

//select
function select(id) {
    return document.querySelector(id);
  }
  //addListener
  function addListener(selector, eventName, callback) {
    document.querySelector(selector).addEventListener(eventName, callback);
  }
  
  //createlement
  
  function createlement(element) {
    return document.createElement(element);
  }


if (typeof module !== "undefined") {
    module.exports = fetchApi;
  }