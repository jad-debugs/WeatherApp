const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

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