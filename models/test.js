var utils = require('./utils')

utils.generateRandomProjectID()
.then((res) => {
    console.log("This is new random id: ", res)
})