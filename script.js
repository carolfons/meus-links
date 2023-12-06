function toggleMode() {
  const doc = document.documentElement
  doc.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (doc.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-carol.png")
  } else {
    img.setAttribute("src", "./assets/avatar-carol.png")
  }
}
