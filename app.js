//-----definition parameter-----
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const ftMaker = require('./ft_maker')
const app = express()
const port = 3000


//--------basic setting---------
//setting engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// setting static files
app.use(express.static('public'))


//----------set routing----------
//handle get req
app.get('/', (req, res) => {
  res.render('index')
})
//handle post req
app.post('/', (req, res) => {
  const judge = {}
  const options = req.body
  judge[options.career] = 'on'
  const nonsense = ftMaker(req.body)
  res.render('index', { nonsense, options, judge })
})
//set listener
app.listen(port, () => {
  console.log(`The server is listen on port ${port}`)
})
