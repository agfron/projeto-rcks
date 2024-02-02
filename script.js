function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img") 

  if (html.classList.contains ("light") )  {
    img.setAttribute("src", "assets/assets/DE44828D-850A-4BB8-8BD3-56C167225114-removebg-previewimage_clara.png")
  }
  else {
    img.setAttribute("src", "assets/assets/imagem.projeto.PNG")
  }
}
  


