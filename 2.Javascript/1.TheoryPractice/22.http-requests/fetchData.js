fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) {
            throw new Error('something went wrong')
            return response.json()
        }
    }).then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log('Something went wrong', error)
    })