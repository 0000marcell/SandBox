var data = [55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85,
            101, 95, 105, 114, 150, 180, 210, 125, 100, 71,
            75, 72, 67];

var barWidth = 20, barPadding = 3;
var maxValue = d3.max(data);
var width = 500;

function xloc(d, i) { return i * (barWidth + barPadding); }
function yloc(d) { return maxValue - d; }
function translator(d, i) {
    return "translate(" + xloc(d, i) + "," + yloc(d) + ")";
}

var textTranslator = "translate(" + barWidth / 2 + ",0)";

var svg = d3.select('body')
            .append('svg')
            .attr('width', totalWidth)
            .attr('height', totalHeight) 
            .append('g');

svg.append('rect')
  .attr('width', totalWidth)
  .attr('height', totalWidth)
  .attr('fill', 'white')
  .attr('stroke', 'black')
  .attr('stroke-width', 1);



var graphGroup = svg.append('g')
                    .attr('transform', 'translate(' + margin.left + ',' +
                                                     margin.top + ")");

graphGroup.append('rect')
          .attr('fill', 'rgba(0,0,0,0.1)')
          .attr('width', totalWidth – (margin.left + margin.right))
          .attr('height', totalHeight - (margin.bottom + margin.top));


var barGroups = mainGroup.selectAll('g')
               .data(data)
               .enter()
               .append('g')
               .attr('transform', translator);

barGroups.append('rect')
         .attr('fill', 'steelblue')
         .attr('width', barWidth)
         .attr('height', function (d) { return d; })

barGroups.append('text')
       .text(function(d) { return d; })
       .attr('fill', 'white')
       .attr('alignment-baseline', 'before-edge')
       .attr('text-anchor', 'middle')
       .attr('transform', textTranslator)
       .style('font', '10px sans-serif');

var scale = d3.scale
              .linear()
              .domain([0, maxValue])
              .range([0, width]);

var axis = d3.svg.axis().scale(scale);
svg.call(axis);

