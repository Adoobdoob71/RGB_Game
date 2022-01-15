// objects
var correct_color = document.getElementById("correct_color")
var user_color = document.getElementById("user_color")

var rgb_solution = document.getElementById("rgb_solution")
var game_box = document.getElementById("game_box")
var info_box = document.getElementById("info_box")

// states
var color = generateColor()
var game_finished = false
var show_info = false

// buttons
var submit_button = document.getElementById("submit_button")
var info_button = document.getElementById("info_button")

// inputs
var red_input = document.getElementById("red_value")
var green_input = document.getElementById("green_value")
var blue_input = document.getElementById("blue_value")

// listeners
submit_button.addEventListener("click", () => submit())
info_button.addEventListener("click", () => {
  show_info = !show_info
  game_box.style.display = show_info ? "none" : "flex"
  info_box.style.display = show_info ? "flex" : "none"
})
red_input.addEventListener("change", (event) => {
  if (isNaN(parseInt(event.target.value))) red_input.value = 0
  if (event.target.value < 0) red_input.value = 0
  if (event.target.value > 255) red_input.value = 255
})
green_input.addEventListener("change", (event) => {
  if (isNaN(parseInt(event.target.value))) green_input.value = 0
  if (event.target.value < 0) green_input.value = 0
  if (event.target.value > 255) green_input.value = 255
})
blue_input.addEventListener("change", (event) => {
  if (isNaN(parseInt(event.target.value))) blue_input.value = 0
  if (event.target.value < 0) blue_input.value = 0
  if (event.target.value > 255) blue_input = 255
})
red_input.addEventListener("focus", () => (red_input.value = ""))
green_input.addEventListener("focus", () => (green_input.value = ""))
blue_input.addEventListener("focus", () => (blue_input.value = ""))

red_input.addEventListener("focusout", () => {
  if (isNaN(parseInt(red_input.value))) red_input.value = 0
})
green_input.addEventListener("focusout", () => {
  if (isNaN(parseInt(green_input.value))) green_input.value = 0
})
blue_input.addEventListener("focusout", () => {
  if (isNaN(parseInt(blue_input.value))) blue_input.value = 0
})

function generateColor() {
  const generatedColor = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
  }
  correct_color.style.backgroundColor = `rgb(${generatedColor.red}, ${generatedColor.green}, ${generatedColor.blue})`
  user_color.style.flex = 0
  return generatedColor
}

function submit() {
  if (game_finished) {
    red_input.value = 0
    green_input.value = 0
    blue_input.value = 0
    color = generateColor()
    rgb_solution.innerHTML = ""
    correct_color.className = "correct_color"
    user_color.className = "user_color"
    game_finished = false
    submit_button.innerHTML = "SUBMIT"
  } else {
    var red_bool = Math.abs(parseInt(red_input.value) - color.red) < 20
    var green_bool = Math.abs(parseInt(green_input.value) - color.green) < 20
    var blue_bool = Math.abs(parseInt(blue_input.value) - color.blue) < 20
    game_finished = true
    user_color.style.backgroundColor = `rgb(${red_input.value}, ${green_input.value}, ${blue_input.value})`
    user_color.style.flex = 1
    rgb_solution.innerHTML = `rgb(${color.red}, ${color.green}, ${color.blue})`
    if (red_bool && green_bool && blue_bool) {
      correct_color.className = "correct_color color_box_rainbow"
      user_color.className = "user_color color_box_rainbow"
    }
    submit_button.innerHTML = "Try again?"
  }
}
