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