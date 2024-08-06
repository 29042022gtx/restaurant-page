import './style.css'
import home from './home.js'
import menu from './menu.js'
import about from './about.js'

const display = (function() {
  const content = document.querySelector('#content')

  const push = (node) => {
    clear()
    content.append(node)
  }

  function clear() {
    for (let i = 0; i < content.childNodes.length; i++)
      content.removeChild(content.firstChild)
  }

  return {push}
})()

const contents = {
  home,
  menu,
  about
}
const nav = document.querySelector('nav')
nav.addEventListener('click', function(e) {
  const id = e.target.id
  if (id in contents)
    display.push(contents[id])
})

display.push(home)






