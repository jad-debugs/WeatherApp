const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
// use env from heroku, else use local part 3000
const port = process.env.PORT || 3000

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// set up static directory serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jad Isaac'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jad Isaac'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Jad Isaac',
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            // return stops this function
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/easter-egg', (req, res) => {
    res.send('<h1>HEY! Did you read the source code?</h1>'
    + '<h1>Well, nice I guess</h1>')
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jad Isaac',
        errorMessage: 'Help article not found',
    })
})

// else 404 error
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jad Isaac',
        errorMessage: 'Page not found.',
    })
})

// starts up website
app.listen(port, () => {
    console.log('server is up on port ' + port)
})