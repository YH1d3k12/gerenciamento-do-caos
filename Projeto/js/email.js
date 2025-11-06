function enviarContato() {
  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var mensagem = document.getElementById("mensagem").value.trim();

  // Verifica se algum campo está vazio
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return;
  }

  // Validação básica de e-mail
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("E-mail inválido. Digite um e-mail válido.");
    return;
  }

  // Se tudo estiver certo, envia os dados
  var dados = { nome, email, mensagem };

  fetch("/send.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // importante
    body: JSON.stringify(dados),
  })
    .then((r) => r.text())
    .then((t) => {
      alert("Mensagem enviada com sucesso!");
      // limpa os campos
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mensagem").value = "";
    })
    .catch((e) => {
      alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
      console.error(e);
    });
}