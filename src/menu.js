import image from './asset/images/menu.jpg'

const node = (function() {
  const container = document.createElement('div')

  const title = createDiv('title')
  title.textContent = 'Menu'

  const figure = document.createElement('img')
  figure.classList.add('figure')
  figure.src = image

  const link = document.createElement('a')
  link.href = 'https://www.pexels.com/photo/fries-and-dipping-sauce-1893555/'
  link.textContent = 'Soure: Valeria Boltneva - Pexels'

  const details = createDiv('details')
  details.textContent = 'List of plates'

  container.append(title)
  container.append(figure)
  container.append(link)
  container.append(details)

  function createDiv(className) {
    const div = document.createElement('div')
    if (className != null)
      div.classList.add(className)
    return div
  }

  return container
})()

export default node