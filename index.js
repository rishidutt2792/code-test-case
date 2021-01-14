const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use('/pets', require('./routes/pets'));

app.listen(port, (err) => {
	if (err) console.log('Error in server starting ', err);
	else console.log(`Server running on the port: ${port}`);
});

module.exports = app;
