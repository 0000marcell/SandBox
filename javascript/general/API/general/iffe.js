let soc;
(function () {
  let add = function () {
    console.log(`add ${val}`);
  },
  val = 'marcell';
  soc = {
    add: add
  };
})();

soc.add();
