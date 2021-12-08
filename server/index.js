const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://after7203:1234@boilerplate.wod5t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true, useUnifiedTopology: true//, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})