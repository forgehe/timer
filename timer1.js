// peer programmed with @
let args = process.argv.slice(2);
​
const timer = function (args){
  for(let item in args){
    if(parseInt(args[item]) > 0){
      setTimeout(() => {
        process.stdout.write('\x07');
      }, args[item] * 1000)
    }
  }
}
​
timer(args);