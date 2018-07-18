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

//search
addListener("#search", "click", function(event) {
  event.preventDefault();
  select("#main").innerHTML = "";
  var sec = select("#sec");
  for (let index = sec.length - 1; index > 1; index--) {
    sec.removeChild(sec.childNodes[sec.childNodes.length - 1]);
  }
  if (select("#input").value.trim() != "") {
    var url =
      "https://yts.am/api/v2/list_movies.json?query_term=" +
      select("#input").value;
    fetchApi(url, function(response) {
      if (response.data.movie_count != 0) {
        var mov = response.data.movies.length;
        for (var i = 0; i < mov; i++) {
          var gif = response.data.movies[i].medium_cover_image;
          var movName = response.data.movies[i].title;
          var movYear = response.data.movies[i].year;
          var image = createlement("img");
          var movName1 = createlement("h4");
          var movYear1 = createlement("span");
          var scop_movi = createlement("div");
          image.classList.add("img_movi");
          scop_movi.classList.add("scop_movi");
          image.src = gif;
          movName1.innerHTML = movName;
          movYear1.innerHTML = movYear;
          scop_movi.appendChild(image);
          scop_movi.appendChild(movName1);
          scop_movi.appendChild(movYear1);
          select("#main").appendChild(scop_movi);
        }
      } else {
        var error = createlement("h1");
        error.classList.add("header");
        error.innerHTML = "Sorry Movie Not Found";
        select("#sec").appendChild(error);
      }
    });
    // select("#input").value="";
  } else {
    alert("Please Enter a Movie");
  }
});
