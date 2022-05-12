const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const { extname } = require('path')
const app = express()
const port = 3000


// http logger
app.engine('hbs', engine({
  extname: '.hbs'
}
));
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

// temoplate
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))
app.get('', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})