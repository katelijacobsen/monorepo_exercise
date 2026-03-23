const axios = require('axios').default;

// Get methode

axios.get('/user?ID=1')
    // This handles the sucess
    .then(function (response:any) {
        console.log('Kat')
    })

    // This handles the error
    .catch(function (error:string) {
        console.log('whoops')
    })

    // This will always execute

    .finally(function () {
        
    })