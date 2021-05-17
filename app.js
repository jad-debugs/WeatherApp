const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c4de2159095c8dedb0f14ee66143aa7a&query=37.8267,-122.4233&units=f'

request({url: url, json: true}, (error, response) => {
    console.log("It is currently " + response.body.current.temperature
    + " degrees outside, but it feels like " + response.body.current.feelslike)
})

const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=83f21002a9446fd4be93fa7f46815f10&query=Los%20Angeles&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    console.log('latitude: ' + response.body.data[0].latitude + 
    '\nlongitude: ' + response.body.data[0].longitude);
})