const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(40.7128, 74.0060, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

// geocode('California', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })