var generator = require("generate-password")

var password= generator.generate({
    length:20,
    symbols:'!@#$%&*_-',
    numbers:true,
    strict:true,
    uppercase:true,
})

console.log(password)