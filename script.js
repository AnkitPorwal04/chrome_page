document.querySelector("input").addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        var text = document.getElementById("search").value;
        var cleanQuery = text.replace(" ", "+", text);
        var url = 'http://www.google.com/search?q=' + cleanQuery;
        window.location.href = url;
    }
  });
  

  document.querySelector("#image-button").addEventListener("click", function() {
    var text = document.getElementById("search").value;
    var cleanQuery = text.replace(" ", "+", text);
    var url = 'http://www.google.com/search?q=' + cleanQuery;
    window.location.href = url;
  });