const{ readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/firstfile.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync(
    './content/resuly-asyn.txt',
    `Here is the results :${first},${second}` 
)