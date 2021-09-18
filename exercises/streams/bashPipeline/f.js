#!/usr/local/bin/node
process.stdin.on('data', d => console.log(+d*+d))

//For use: echo 8 | ./f.js | ./g.js  OR echo 8 | node ./f.js |node ./g.js 