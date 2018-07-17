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
  select("#img").innerHTML = "";
  if (select("#input").value.trim() != "") {
    var url =
      "https://yts.am/api/v2/list_movies.json?query_term=" +
      select("#input").value;
    fetch(url, function(response) {
      if (response.data.movie_count != 0) {
        var mov = response.data.movies.length;
        for (var i = 0; i < mov; i++) {
          var gif = response.data.movies[i].medium_cover_image;
          var movName = response.data.movies[i].title;
          var movYear = response.data.movies[i].year;
          var image = createlement("img");
          var movName1 = createlement("h5");
          var movYear1 = createlement("span");
          image.classList.add("img_movie");
          image.src = gif;
          movName1.innerHTML = movName;
          movYear1.innerHTML = movYear;
          select("#img").appendChild(image);
          select("#img").appendChild(movName1);
          select("#img").appendChild(movYear1);
        }
      } else {
        var error = createlement("h4");
        error.innerHTML = "Sorry Movie Not Found";
        select("#img").appendChild(error);
      }
    });
  } else {
    alert("Please Enter a Movie");
  }
});
