let searchCategory = "people";
let searchQuery = "";

let fetchData = function () {
  let url =
    "https://swapi.dev/api/" + searchCategory + "/?search=" + searchQuery;

  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",
    success: function (data) {
      renderResults(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
      console.log(jqXHR);
    },
  });
};

$(".search-form").on("submit", function (e) {
  e.preventDefault();

  searchQuery = $("#search-query").val();
  searchCategory = $("#search-category").val();

  fetchData();
});

var renderResults = function (data) {
  $(".results").empty();

  for (let i = 0; i < data.results.length; i++) {
    var resultsHTML;

    var result = data.results[i];

    if (searchCategory === "people") {
      resultsHTML =
        '<div class="col-md-6">' +
        "<h4>" +
        result.name +
        "</h4>" +
        "<div> <strong> Birth Year </strong>: " +
        result.birth_year +
        "</div>" +
        "<div> <strong> Eye Color </strong>: " +
        result.eye_color +
        "</div>" +
        "<div> <strong> Gender </strong>: " +
        result.gender +
        "</div>" +
        "<div> <strong> Height </strong>: " +
        result.height +
        "</div>" +
        "<hr>" +
        "</div>";
    } else if (searchCategory === "starships") {
      resultsHTML =
        '<div class="col-md-6">' +
        "<h4>" +
        result.name +
        "</h4>" +
        "<div> <strong> Model </strong>: " +
        result.model +
        "</div>" +
        "<div> <strong> Manufacturer </strong>: " +
        result.manufacturer +
        "</div>" +
        "<div> <strong> Cost in Credits </strong>: " +
        result.cost_in_credits +
        "</div>" +
        "<div> <strong> Cargo Capacity </strong>: " +
        result.cargo_capacity +
        "</div>" +
        "<div> <strong> Starship Class </strong>: " +
        result.starship_class +
        "</div>" +
        "<hr>" +
        "</div>";
    }

    $(".results").append(resultsHTML);
  }
};

fetchData();