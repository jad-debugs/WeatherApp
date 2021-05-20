const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const errorMessage = document.querySelector('#error')
const successMessage = document.querySelector('#success')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value
    const url = 'http://localhost:3000/weather?address=' + location

    errorMessage.textContent = 'Loading...'
    successMessage.textContent = ''

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                errorMessage.textContent = data.error
            }
            else {
                errorMessage.textContent = data.location
                successMessage.textContent = data.forecast
            }
        })
    })

})
