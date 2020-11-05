const express = require('express'),
	  path    = require('path'),
	  port    = process.env.PORT || 2400,
	  app     = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res)=>{
	res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.listen(port, (err)=>{
	if(err) throw err;
	console.log('Zomato Server is Running at port 2000');
})