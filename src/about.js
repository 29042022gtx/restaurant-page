import image from './asset/images/about.jpg'

const node = (function() {
  const container = document.createElement('div')

  const title = createDiv('title')
  title.textContent = 'Information'

  const figure = document.createElement('img')
  figure.classList.add('figure')
  figure.src = image

  const link = document.createElement('a')
  link.href = 'https://www.pexels.com/photo/empty-bar-filled-with-lights-260922/'
  link.textContent = 'Soure: Pixabay - Pexels'

  const details = createDiv('details')
  details.textContent = 'Restaurant\'s information'

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