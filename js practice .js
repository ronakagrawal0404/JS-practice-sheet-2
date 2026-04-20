// DOM = Document Object Model (the page as a JS tree)

document.getElementById('myId')
document.querySelector('.myClass')   // first match
document.querySelectorAll('p')       // all matches (NodeList)

// Change content
el.textContent = 'Hello'
el.innerHTML = '<b>Bold</b>'

// Change style
el.style.color = 'red'
el.classList.add('active')
el.classList.remove('active')
el.classList.toggle('active')

// Create & add elements
const div = document.createElement('div')
div.textContent = 'New!'
document.body.appendChild(div)






const btn = document.querySelector('#btn')

// Add event
btn.addEventListener('click', function(e) {
  console.log('clicked!', e.target)
})

// Common events
// click, dblclick, mouseover, mouseout
// keydown, keyup, submit, change, input

// Remove event
function handler() { console.log('hi') }
btn.addEventListener('click', handler)
btn.removeEventListener('click', handler)

// Prevent default (e.g. form submit reload)
e.preventDefault()

// Stop bubbling
e.stopPropagation()









const form = document.querySelector('#myForm')

form.addEventListener('submit', function(e) {
  e.preventDefault()  // stop page reload

  const name = document.querySelector('#name').value.trim()

  // Manual validation
  if (name === '') {
    alert('Name is required!')
    return
  }

  console.log('Form submitted:', name)
})

// Useful input events
input.addEventListener('input', () => { /* live typing */ })
input.addEventListener('blur', () => { /* left the field */ })









// setTimeout — runs ONCE after delay (ms)
const t = setTimeout(() => {
  console.log('runs after 2s')
}, 2000)

clearTimeout(t)  // cancel it


// setInterval — runs REPEATEDLY every X ms
const id = setInterval(() => {
  console.log('every 1s')
}, 1000)

clearInterval(id)  // stop it


// Tip: always clear intervals when not needed (memory leak!)













// localStorage — stays even after closing the browser
localStorage.setItem('name', 'Rahul')
localStorage.getItem('name')      // 'Rahul'
localStorage.removeItem('name')
localStorage.clear()              // wipe everything

// sessionStorage — cleared when tab closes
sessionStorage.setItem('token', 'abc123')
sessionStorage.getItem('token')

// Storing objects (must stringify!)
const user = { name: 'Rahul', age: 20 }
localStorage.setItem('user', JSON.stringify(user))

const data = JSON.parse(localStorage.getItem('user'))
console.log(data.name)  // 'Rahul'




