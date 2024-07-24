// TODO: encontrar uma forma segura para lidar com a senha

function validaCadastro() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let dataNascimento = document.getElementById("nascimento");
  let senha = document.getElementById("senha");
  let confirmarSenha = document.getElementById("confirmar-senha");
  let checkbox = document.getElementById("checkbox");

  if (nome.value == "") {
    alert("Por favor, insira seu nome");
    nome.focus();
    return false;
  }

  if (email.value == "") {
    alert("Por favor, insira seu email");
    email.focus();
    return false;
  }

  if (dataNascimento.value == "") {
    alert("Por favor, insira sua data de nascimento");
    dataNascimento.focus();
    return false;
  } 

  if (senha.value == "") {
    alert("Por favor, insira sua senha");
    senha.focus();
    return false;
  }

  if (confirmarSenha.value == "") {
    alert("Por favor, insira novamente sua senha para comfirmá-la");
    confirmarSenha.focus();
    return false;
  }

  if (confirmarSenha.value != senha.value) {
    alert("A confirmação da senha precisa ser igual à senha");
    confirmarSenha.focus();
    return false;
  }

  if (!checkbox.checked) {
    alert("Para efetuar o cadastro, você precisa aceitar nossos termos e condições");
    senha.focus();
    return false;
  }

  return true;
}
