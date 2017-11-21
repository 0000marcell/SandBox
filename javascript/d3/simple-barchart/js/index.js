var data = [55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85,
            101, 95, 105, 114, 150, 180, 210, 125, 100, 71,
            75, 72, 67];

var barWidth = 20, barPadding = 3;
var maxValue = d3.max(data);

var mainGroup = d3.select('body')
    .append('svg')
    .attr('width', 1000)
    .attr('height',250)
    .append('g');

function xloc(d, i) { return i * (barWidth + barPadding); }
function yloc(d) { return maxValue - d; }
function translator(d, i) {
    return "translate(" + xloc(d, i) + "," + yloc(d) + ")";
}

var barGroups = mainGroup.selectAll('g')
       .data(data)
       .enter()
       .append('g')
       .attr('transform', translator);

barGroups.selectAll('rect')
         .data(data)
         .enter()
         .append('rect')
         .attr('fill', 'steelblue')
         .attr('width', barWidth)
         .attr('height', function (d) { return d; })
