function runCAlg(){
  var execFile = require('child_process').execFile,
      main;
  main = execFile('/Users/marcell/Documents/github/C/IPC/public/main',
    function (error, stdout, stderr) {
      if (error !== null){
        console.log('exec error: ' + error);
      }
    });
  
  main.stdout.on('data', function (data) {
    alert("msg "+data);
    console.log('stdout: ' + data);
  });   
}

function drawMatrix(){
  var cellNumber = $("#matrix-size").val(); 
  var style = calculateCellSize(cellNumber);
  var totalCell = (cellNumber * cellNumber); 
  $('#draw-area').empty();
  for (var i = 0; i < totalCell; i++){
    console.log("gonna draw "+"<span id="+i+" style="+style+"></span>");
    $("#draw-area").append("<span id="+i+" style="+style+"></span>");
  };
}

function calculateCellSize(cellNumber){
  var w_h = (Math.round(580/(cellNumber + 1)));
  console.log("w_h "+w_h);
  var style = "min-width: "+w_h+"px; min-height: "+w_h+"px;";
  return style; 
}