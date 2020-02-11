const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

/*

    The user can press b and it should beep right away
    The user can input any number from 1 to 9 and it should
        immediately output "setting timer for x seconds...", and
        beep after that number of seconds has passed
    The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

    process.stdout.write('\x07');
*/


// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (key === "b") {
    process.stdout.write('\x07');
  }

  if(parseInt(key) >= 1 && parseInt(key) <= 9) {
    console.log(`setting timer for ${key} seconds..`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
  
});