const express = require('express')
const app = express()
const port = 3000

var child_process = require('child_process')

app.get('/', (req, res) => {
	child_process.exec('cd.. && cd.. && cd Hackathone && cd mailer && npm run build:email', function (error, stdout, stderr) {
		console.log('build success!')
		child_process.exec('cd.. && cd.. && cd Hackathone && cd mailer && generate-email.bat', function (error, stdout, stderr) {
			console.log('gen success!')
			res.send('Email generated successfully!')
		});
	});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))