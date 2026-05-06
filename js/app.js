const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(`No element found: ${selector}`)
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('active')
})

const navLinksItems = document.querySelectorAll('.nav-link')

navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('active')
  })
})

const date = getElement('#date')
date.textContent = new Date().getFullYear()
