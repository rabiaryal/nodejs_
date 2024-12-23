// require('./3_add_values')
// when we import the module, it executes

// ---->>>>>>>>Built in modeules-->>>>
// 1) OS
// 2) path
// 3) fs
// 4) HTTP

// const os = require('os');
// info about the current users
// const user = os.userInfo();
// console.log(user);

// methods running
// console.log(`The system uptime is ${os.uptime}`);

// const currentOs = {
//     name: os.type(),
//     release : os.release(),
//     totalmem: os.totalmem(),
//     freeMem : os.freemem(),
// }

// console.log(currentOs);
// console.log(`Releases : ${currentOs.release}`);
// console.log(`total Memory : ${currentOs.totalmem}`);

// console.log(`free Memory : ${currentOs.freeMem }`);

// path ------->>>>>>>>
// const path = require('path')

// console.log(path.sep);

// const filePath = path.join('/trail','text1.txt');
// console.log(filePath);

// fs ->>>>>>->>
// async concept
const { log } = require("console");
const { readFile, writeFile } = require("fs");

readFile(
	"./content/firstfile.txt",
	"utf8",
	(err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const first = result;

		readFile(
			"./content/second.txt",
			"utf8",
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				const seconds = result;

				writeFile(
					`./content/result-async.txt`,
					`HEre is the results : ${first}, ${seconds}`,
					(err, result) => {
                        if(err){
                            console.log(err);
                            return
                        } else{
                        console.log(result);
                        
                        }
                    }
				);
			}
		);
	}
);
