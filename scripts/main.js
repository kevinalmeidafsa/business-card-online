function troggleMode() {
  const html = document.documentElement;

  //Forma Manual de fazer a troca de tema--------------------------------

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light");
  //}else{
  //  html.classList.add("light");
  // }

  //---------------------------------------------------------------------

  //Forma Automatizada de fazer a troca de tema--------------------------
  html.classList.toggle("light");
  //---------------------------------------------------------------------
  //Mudando Img do perfil--------------------------------------------------

  //Pegando Tag Img
  const img = document.querySelector("#profileImg img");
  //Condição de substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver no light mode, mudar img
    img.setAttribute("src", "./assets/avatar-lightmode.png");
    //Se tiver no light mode, mudar Alt
    img.setAttribute("alt", "Avatar de kevin, com óculos no fundo verde");
  } else {
    //Se não tiver no light mode, mantenha img
    img.setAttribute("src", "./assets/avatar-darkmode.png");
    //Se não tiver no light mode, mantenha o Alt
    img.setAttribute("alt", "Avatar de kevin, sem óculos no fundo verde");
  }
}
