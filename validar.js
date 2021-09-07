function validar() {
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var telefone = document.getElementById("telefone");
 var cidade = document.getElementById("cidade");
 var estado = document.getElementById("estado");
 var endereco = document.getElementById("estado");
 
 
   
   
  if (nome.value == "") {
    alert("Nome Completo não informado");
    
    nome.focus();
    return;
  }
  if (email.value == "") {
    alert("E-mail não informado");
    email.focus();
    return;
  }
  if (telefone.value == "") {
    alert("Telefone não informado");
    telefone.focus();
    return;
  }
  if (cidade.value == "") {
    alert("Cidade não informado");
    cidade.focus();
    return;
  }
  if (estado.value == "") {
    alert("Estado não informado");
    estado.focus();
    return;
  }
  if (endereco.value == "") {
    alert("Endereço não informado");
    endereco.focus();
    return;
  }
  alert("Formulário Enviado Com Sucesso!");

  
  
document.querySelector('form').reset();
}