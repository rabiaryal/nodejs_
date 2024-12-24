const http = require('http');

const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.end('Welcome to our home page')
	}
	if(req.url === '/about'){
		res.end('Here is our short History')
	}
	res.end(
		`
		<h1> Oops!</h1>
		<p> we can't  seen to  find the page you are looking for</p>
		<a hreft = "/"> back home </a  >  
		
		
		`
	)
console.log(req)
res.write("Welcome to our home page")
res.end()
})

server.listen(5000)