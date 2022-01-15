// objects
var color_box = document.getElementById("color_box")
var rgb_solution = document.getElementById("rgb_solution")

// states
var color = generateColor()
var game_finished = false

// buttons
var submit_button = document.getElementById("submit_button")

// inputs
var red_input = document.getElementById("red_value")
var green_input = document.getElementById("green_value")
var blue_input = document.getElementById("blue_value")

// listeners
submit_button.addEventListener("click", () => submit())
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

function generateColor() {
  const generatedColor = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
  }
  color_box.style.backgroundColor = `rgb(${generatedColor.red}, ${generatedColor.green}, ${generatedColor.blue})`
  return generatedColor
}

function submit() {
  if (game_finished) {
    red_input.value = 0
    green_input.value = 0
    blue_input.value = 0
    color = generateColor()
    rgb_solution.innerHTML = ""
    game_finished = false
    submit_button.innerHTML = "SUBMIT"
    color_box.className = "color_box"
  } else {
    var red_bool = Math.abs(parseInt(red_input.value) - color.red) < 20
    var green_bool = Math.abs(parseInt(green_input.value) - color.green) < 20
    var blue_bool = Math.abs(parseInt(blue_input.value) - color.blue) < 20
    game_finished = true
    rgb_solution.innerHTML = `rgb(${color.red}, ${color.green}, ${color.blue})`
    if (red_bool && green_bool && blue_bool) {
      color_box.className = "color_box color_box_rainbow"
    }
    submit_button.innerHTML = "Try again?"
  }
}
