const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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
        email: 'jadjrisaac@gmail.com',
        name: 'Jad Isaac'
    })
})

app.get('/weather', (req, res) => {
    obj = {
        forecast: 'Rainy and cloudy',
        location: 'California',
    }
    res.send(obj)
})

// starts up website
app.listen(3000, () => {
    console.log("server is up on port 3000")
})