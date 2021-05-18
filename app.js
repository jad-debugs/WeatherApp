const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]
if (!location) {
    console.log('No location was provided! Try again')
}
else {
    geocode(location, (error, geoData) => {
        if (error) {
            // return stops this function
            return console.log(error)
        }

        forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(geoData.location)
            console.log(forecastData)
        })
    })
}
