const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c4de2159095c8dedb0f14ee66143aa7a&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('Unable to find', undefined)
        }
        else {
            callback(undefined, 'It is currently ' + body.current.temperature
                     + ' degrees outside, but it feels like ' + body.current.feelslike + ' degrees')
        }
    })
}

module.exports = forecast