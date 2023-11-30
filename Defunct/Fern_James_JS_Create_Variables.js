
// Declared Variables for minimum ride requirements
var minimum_age = 10;
var minimum_height = 42;
// Declared variables for messages to show
var message = 'Get on that ride!'
var message2 = 'Sorry kiddo. Maybe next year.'


if (minimum_height >= 42 && minimum_age>10){__
console.log(message)
}
// Either requirement not met to get message2
else if(minimum_age<10) {
console.log(message2)
}
else if(minimum_height<42) {
    console.log(message2)
    }