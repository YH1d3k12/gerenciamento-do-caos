function enviarContato() {
  var email = document.getElementById("email").value;
  if (email.indexOf("@") == -1) {
    alert("email inválido");
  }
}