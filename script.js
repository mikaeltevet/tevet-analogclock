// Element selectors
const body = document.querySelector('body')
const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')
const modeSwitch = document.querySelector('.mode-switch')

// Initial dark mode setup
if (localStorage.getItem('mode') === 'Dark') {
  toggleDarkMode()
}

// Event listener for mode switch
modeSwitch.addEventListener('click', toggleDarkMode)

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle('dark')
  const isDarkMode = body.classList.contains('dark')
  modeSwitch.textContent = isDarkMode ? 'Go light' : 'Go dark'
  localStorage.setItem('mode', isDarkMode ? 'Dark' : 'Light')
}

// Function to update time
function updateTime() {
  const date = new Date()
  const secToDeg = (date.getSeconds() / 60) * 360
  const minToDeg = (date.getMinutes() / 60) * 360
  const hrToDeg = (date.getHours() / 12) * 360

  secondHand.style.transform = `rotate(${secToDeg}deg)`
  minuteHand.style.transform = `rotate(${minToDeg}deg)`
  hourHand.style.transform = `rotate(${hrToDeg}deg)`
}

// Update time every second
setInterval(updateTime, 1000)
