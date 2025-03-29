const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggies');
const form = document.querySelector('#signup-form');

const formData = {}

for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    input.addEventListener('change', ({ target }) => {
        const { name, type, value, checked } = target
        formData[name] = type === 'checkbox' ? checked : value
        console.log(formData)
    })
}

// form.addEventListener('submit', function (e) {
//     alert('form submitted')
//     console.log('cc', creditCardInput.value)
//     console.log('terms', termsCheckbox.checked)
//     console.log('veggies', veggieSelect.value)
//     e.preventDefault()
// })

// creditCardInput.addEventListener('input', e => {
//     console.log('Event changed', e)
//     formData['cc'] = e.target.value
// })

// veggieSelect.addEventListener('input', e => {
//     console.log('veggiesChange', e)
//     formData['veggies'] = e.target.value
// })

// termsCheckbox.addEventListener('input', e => {
//     console.log('Checkbox', e)
//     formData['terms'] = e.target.value
// })