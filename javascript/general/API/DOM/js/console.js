// assert
// clear
// count
// error
// group
// groupCollapsed
// groupEnd
// info
// log
// table
function clearConsole() {
  console.clear();
  console.log('clear!');
}

window.onload = function () {
  console.assert(1, 'error!');
  console.log('something something!');
  console.table([{a:1, b:2, c:3}, {a:"foo", b:false, c:undefined}]);
  for (var i = 0; i < 5; i++) {
    console.count('loop'); 
  }
  console.error('error!');
  console.group();
  console.log('first level');
  console.group();
  console.log('second level');
  console.groupEnd();
  console.groupEnd();
  let obj = {name: 'marcell'};
  console.info(obj);
}
