const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const child_process = require('child_process')

app.use(cors())

/*RUN build:email before calling api*/
app.get('/email', (req, res) => {
	let generateEmail = [];
	for (let i = 1; i <= 10; i++) {
		generateEmail.push(' generate-email.bat ' + i);
	}
	child_process.exec('cd.. && cd.. && cd mailer-campaign && cd front_end && ' + generateEmail.join(' && '), function (error, stdout, stderr) {
		console.log('gen success!')
		res.json({ msg: 'Email generated successfully!' })
	});
})

app.get('/new-email', (req, res) => {
	let generateEmail = [];
	for (let i = 1; i <= 10; i++) {
		generateEmail.push(' generate-new-email.bat ' + i);
	}
	child_process.exec('cd.. && cd.. && cd mailer-campaign && cd front_end && ' + generateEmail.join(' && '), function (error, stdout, stderr) {
		console.log('gen success!')
		res.json({ msg: 'Email generated successfully!' })
	});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))