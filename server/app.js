const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const child_process = require('child_process')

app.use(cors())

app.get('/', (req, res) => {
	child_process.exec('cd.. && cd.. && cd mailer-campaign && cd front_end && npm run build:email', function (error, stdout, stderr) {
		console.log('build success!')
		child_process.exec('cd.. && cd.. && cd mailer-campaign && cd front_end && generate-email.bat', function (error, stdout, stderr) {
			console.log('gen success!')
			res.json({ msg: 'Email generated successfully!' })
		});
	});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))