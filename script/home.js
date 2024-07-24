
function validaPost() {
  let postTexto = document.getElementById("postar-texto");

  if (postTexto.value == "") {
    alert("Para fazer um post, você precisa digitar um texto");
    postTexto.focus();
    return false;
  }

  return true;
}
