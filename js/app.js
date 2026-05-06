const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw new Error(`Element not found for selector "${selector}" — check your HTML`)
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('is-open')
})

const date = getElement('#date')
const year = new Date().getFullYear()
date.textContent = year
