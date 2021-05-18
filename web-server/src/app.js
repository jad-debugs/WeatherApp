const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Home Page')
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})
app.get('/weather', (req, res) => {
    res.send('Weather Page')
})

// starts up website
app.listen(3000, () => {
    console.log("server is up on port 3000")
})