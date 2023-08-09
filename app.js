(this, function (_) {
  'use strict';
  const foo = {};
  foo.if = function() {
    return 4.0;
  }
  function main() {
    const bar = foo.if() / 2.0;
    console.log(bar);
  }
  main();
  return _;
})(module.exports);
