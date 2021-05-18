const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Jad'
    },
    {
        name: 'Andrew'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
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