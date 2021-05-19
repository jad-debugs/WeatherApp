console.log('Client side js is loaded')

fetch('http://localhost:3000/weather?address=12wh').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        }
        else {
            console.log(data.location + ' ' + data.forecast)
        }
    })
})
