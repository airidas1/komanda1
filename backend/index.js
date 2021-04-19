const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const routes = require('./routes/routes');
var bodyParser = require('body-parser');
var cors = require('cors')

mongoose.connect('mongodb+srv://user:supersecretpass@cluster0.0w5mp.mongodb.net/react-komandinis-projektas?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
})

const corsOptions = {
	exposedHeaders: ['user-id']
}
app.use(cors())
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use('/v1', routes);
app.listen(port);