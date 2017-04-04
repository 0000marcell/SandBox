let clock = new FlipClock($('.your-clock'), {
  clockFace: 'MinuteCounter',
  autoStart: false,
});

clock.callbacks.stop = function(){
  console.log('stop!!!');
}


clock.setCountdown(true);
clock.setTime(25 * 60);
clock.start();

setTimeout(() => {
  debugger;
  console.log('time: ', clock.time.time);
  clock.stop(); 
}, 3000)
