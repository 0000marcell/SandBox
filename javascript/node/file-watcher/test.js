let color = "blue";
(function(color){
  setTimeout(() => {
    console.log(color);
  }, 500);
})(color);

color = "green";
