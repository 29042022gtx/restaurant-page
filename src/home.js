import image from './asset/images/home.jpg'

const node = (function() {
  const container = document.createElement('div')

  const title = createDiv('title')
  title.textContent = 'Introduction'

  const figure = document.createElement('img')
  figure.classList.add('figure')
  figure.src = image

  const link = document.createElement('a')
  link.href = 'https://www.pexels.com/photo/clear-wine-glass-on-table-67468/'
  link.textContent = 'Soure: Life Of Pix - Pexels'

  const details = createDiv('details')
  details.textContent = 'Introduction of restaurant'

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