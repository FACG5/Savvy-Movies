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
  select(".movie_details").innerHTML = "";
  select(".errortext").innerHTML = "";

  if (select("#input").value.trim() == "") {
    alert("Please Enter a Movie");
    // select("#input").value="";
    return;
  }

  var url =
    "https://yts.am/api/v2/list_movies.json?query_term=" +
    select("#input").value;

  fetchApi(url, function(response) {
    if (response.data.movie_count == 0) {
      var error = createlement("h1");
      error.classList.add("header");
      error.innerHTML = "Sorry Movie Not Found";
      select(".errortext").appendChild(error);
      return;
    }

    var mov = response.data.movies.length;
    for (var i = 0; i < mov; i++) {
      var gif = response.data.movies[i].medium_cover_image;
      var movName = response.data.movies[i].title;
      var movYear = response.data.movies[i].year;
      var image = createlement("img");
      image.setAttribute("id_movie", response.data.movies[i].id);
      image.addEventListener("click", function(e) {
        url =
          "https://yts.am/api/v2/movie_details.json?movie_id=" +
          this.getAttribute("id_movie");
        fetchApi(url, function(obj) {
          select("#main").innerHTML = "";
          select(".movie_details").innerHTML = "";
          var movie = obj.data.movie;

          //mainDiv
          var mainDiv = select(".movie_details");
          //firstDiv
          var imgDiv = createlement("div");
          imgDiv.classList.add("img");
          //seacandDiv
          var infoDiv = createlement("div");
          infoDiv.classList.add("information");
          var img = createlement("img");
          img.src = movie.medium_cover_image;
          var form = createlement("form");

          form.setAttribute("method", "get");
          form.setAttribute("action", movie.torrents[0].url);

          var btn = createlement("button");
          btn.id = "btn-download";
          btn.setAttribute("type", "submit");
          btn.classList.add("search-btn");
          btn.textContent = "Download";

          form.appendChild(btn);

          //adding elements to first Div;
          imgDiv.appendChild(img);
          imgDiv.appendChild(form);
          mainDiv.appendChild(imgDiv);

          var headingElement = createlement("h1");
          headingElement.textContent = movie.title;

          var dateElement = createlement("span");
          dateElement.textContent = movie.year;

          var pElement = createlement("p");
          pElement.textContent = movie.description_intro;

          //adding elements to secand Div;
          infoDiv.appendChild(headingElement);
          infoDiv.appendChild(dateElement);
          infoDiv.appendChild(pElement);
          mainDiv.appendChild(infoDiv);
        });
      });

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
  });
});
