var selector = d3.select('body')
     .selectAll('div')
     .data([10, 20, 30])
     .enter()
     .append('div')
     .text(function(d) { return d; });
