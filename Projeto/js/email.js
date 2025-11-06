function enviarContato() {
  var email = document.getElementById("email").value;
  if (email.indexOf("@") == -1) {
    alert("email inválido");
  } else {
    email = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var dados = {
      nome: nome,
      email: email,
      mensagem: mensagem,
    };
    fetch("/send.php", { method: "POST", body: JSON.stringify(dados) })
      .then((r) => r.text())
      .then((t) => {
        alert("Mensagem enviada com sucesso!");
      });
  }
}