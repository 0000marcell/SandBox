var dataArray = [20, 40, 50];
var colors = ['#E91E63', '#9C27B0', '#673AB7'];
var width = 500;
var height = 500;

var canvas = d3.select(".graph")
             .append("svg")
             .attr("width", 500)
             .attr("height", 500);

var widthScale = d3.scaleLinear()
                 .domain([0, 60])
                 .range([0, width]);

var bars = canvas.selectAll("rect")
            .data(dataArray)
            .enter()
              .append("rect")
              .attr("width", function(d) { return widthScale(d); })
              .attr("height", 50)
              .attr("fill", function(d, i){ return colors[i]; })
              .attr("y", function(d, i) { return i * 60;});
