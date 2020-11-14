const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const rubbishGenerator = require('./rubbish_content_generator')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const output = rubbishGenerator(req.body)
  res.render('index', { output })
})

app.listen(port, () => {
  console.log(`Express is running on localhost:${port}.`)
})
