const links = document.querySelectorAll(".header-menu a")

links.forEach(link => {
  const pageUrl = location.href
  const linkUrl = link.href

  if(pageUrl.includes(linkUrl)) {
    link.classList.add("active")
  }
})

const params = new URLSearchParams(location.search)

params.forEach(param => {
  const checkbox = document.getElementById(param)
  if(checkbox) {
    checkbox.checked = true
  }
})

const gallery = document.querySelectorAll(".bicycle-img img")
const galleryContainer = document.querySelector(".bicycle-img")

gallery.forEach(image => {
  image.addEventListener("click", event => {
    const img = event.currentTarget
    if(matchMedia("(min-width: 1000px)").matches) {
      galleryContainer.prepend(img)
    }
  })
})