// onclick
// onblur
// onfocus
// onload // can be used in images
// oninput
// onkeypress
// onreadystatechange
// onmouseover
// onmouseout
// onchange
// oncut
// oncopy
// onpaste
// oncontextmenu
// ondblclick
// oncancel
// onclose
// onresize
// onscrol
// onsubmit

// onkeyup
// onkeydown
// onloadstart // img or XMLHttpRequest
// onloadend // img elements 
// mousedown
// mouseenter
// mouseleave
// mousemove
// onwheel
// onerror can be used in images
// ononline
// onoffline
// onstorage // window
// onunload // window when leaving


document.onreadystatechange = function () {
  console.log('ready state!!!');
  let dialog = document.querySelector('dialog'),
      input = document.querySelector('input'),
      div = document.querySelector('#div-block'),
      img = document.querySelector('img'),
      arr = [];

  img.onload = function () {
    console.log('load end!');
  }

  img.onerror = function () {
    console.log('error!');
  }
  img.onloadstart = function () {
    console.log('load start!');
  }

  document.body.onresize = function () {
    console.log('resize!');
  }

  document.body.style = "background-color: #c8c8c8;";
  dialog.onclick = function (){
    console.log('dialog click!');
    document.body.style = "background-color: #fff";
    dialog.close();
  }

  dialog.onclose = function (){
    console.log('dialog close!');
  }

  input.oncontextmenu = function (){
    console.log('context menu!');
  }

  div.onclick = function () {
    console.log('click div!');
  }

  div.onmousemove = function () {
    console.log('mouse move');
  }

  input.onkeypress = function(e){
    arr = e.target.value.split("");
    if(arr.length > 1 && arr.indexOf('(') 
                      && arr.indexOf(')')){
      arr.splice(0, 0, '(');
      arr.splice(3, 0, ')');
      e.target.value = arr.join("");
    }
  }

  input.oninput = function () {
    console.log('oninput');
  }

  dialog.oncancel = function (){
    console.log('cancel');
  }
}


