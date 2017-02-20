/* TIME */

var getClock = function() {
  var clock = document.querySelector('.time') //grabbing location of where clock is
  var time = new Date() //getting time
  var hours = time.getHours().toString() //put hours to string
  var minutes = time.getMinutes().toString()//put minutes to string
  var seconds = time.getSeconds().toString()//put seconds to string
  if (hours.length < 2) {
    hours = '0' + hours //if single digit hour add zero in front
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes //if single digit minute add zero in front
  }
  if (seconds.length < 2) {
    seconds = '0' + seconds //if single digit second add zero in front
  }

  var clockString = hours + ' : ' + minutes + ' : ' + seconds //putting time format
  clock.textContent = clockString //setting text of clock
}
getClock() //run clock function
setInterval(getClock, 1000) //run clock function every second

/* BAR */

var growBar = function() {
  var bar = document.querySelector(".bar") //grabbing location of bar
  var time = new Date() //getting time
  var seconds = time.getSeconds() //getting seconds
  var percentage = (seconds / 60) * 100 //turning seconds into percentage of how much of the minute has passed
  bar.style.width = percentage + '%' //setting percentage format
}
growBar() //run grow function
setInterval(growBar, 1000) //run grow function every second

/* COLOR */

var getColor = function() {
  var color = document.querySelector('.color') //grabbing location of where text color is
  var gradient = document.querySelector('.gradient') //grabbing location of where color change occurs
  var time = new Date() //getting time
  var hours = time.getHours().toString() //put hours to string
  var minutes = time.getMinutes().toString() //put minutes to string
  var seconds = time.getSeconds().toString() //put seconds to string
  var colorHours = parseInt(hours).toString(16) //change binary to hex for hours
  var colorMinutes = parseInt(minutes).toString(16) //change binary to hex for minutes
  var colorSeconds = parseInt(seconds).toString(16) //change binary to hex for seconds
  if (colorHours.length < 2) { 
    colorHours = '0' + colorHours //if single digit hour add zero in front
  }
  if (colorMinutes.length < 2) {
    colorMinutes = '0' + colorMinutes //if single digit minute add zero in front
  }
  if (colorSeconds.length < 2) {
    colorSeconds = '0' + colorSeconds //if single digit second add zero in front
  }
  var colorString = '#' + colorHours + colorMinutes + colorSeconds //putting hex format
  color.textContent = colorString //setting text of hex
  gradient.style.background =  colorString //setting hex color to background
}
getColor() //run color function
setInterval(getColor, 1000) //run color function every second