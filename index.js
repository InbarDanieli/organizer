// sidebar
const site = document.getElementById("sidebar")
const button = document.getElementById("OpenSB")

function changing() {
  if (site.classList.contains('close-sideB')) {
    site.classList.remove('close-sideB')
    site.classList.add('open-sideB')

    button.classList.remove('close')
    button.classList.add('open')
  }
  else {
    site.classList.remove('open-sideB')
    site.classList.add('close-sideB')

    button.classList.remove('open')
    button.classList.add('close')
  }
}