const request = require('request')
const geocode = require('./utils/geocode')

const url = 'http://api.weatherstack.com/current?access_key=c4de2159095c8dedb0f14ee66143aa7a&query=37.8267,-122.4233&units=f'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     }
//     else if (response.body.error) {
//         console.log('Unable to find')
//     }
//     else {
//         console.log("It is currently " + response.body.current.temperature
//         + " degrees outside, but it feels like " + response.body.current.feelslike)
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoiamFkLWRlYnVncyIsImEiOiJja290MXJvMnAwMzJ6MnVvMzc2aDhrOTcwIn0.gLqfFoAdKbokpU3-zuH7nw'

// request({url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Could not connect to map box')
//     }
//     else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search')
//     }
//     else {
//         console.log('latitude: ' + response.body.features[0].center[1] + 
//         '\nlongitude: ' + response.body.features[0].center[0]);
//     }
// })

geocode('California', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})