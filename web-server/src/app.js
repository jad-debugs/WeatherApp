const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

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
        title: 'Weather App',
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
    obj = {
        forecast: 'Rainy and cloudy',
        location: 'California',
    }
    res.send(obj)
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
app.listen(3000, () => {
    console.log("server is up on port 3000")
})