function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/avatar2nay-fotor-20240216184226.png"
    )
  } else {
    img.setAttribute("src", "./assets/fotor-2024020918211.png")
  }
}
