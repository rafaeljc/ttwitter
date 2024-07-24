// TODO: encontrar uma forma segura para lidar com a senha

function validaLogin() {
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");

  if (email.value == "") {
    alert("Por favor, insira seu email");
    email.focus();
    return false;
  }

  if (senha.value == "") {
    alert("Por favor, insira sua senha");
    senha.focus();
    return false;
  }

  return true;
}
