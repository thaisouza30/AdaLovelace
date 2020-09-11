document.getElementById("botao").addEventListener("click",validaFomulario)


function validaFomulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as novidades por e-mail");
  }else{
    alert("Por favor, preencha os campos nome e email!");
  }
}