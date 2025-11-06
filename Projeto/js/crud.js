function editar(id) {
  var nome = document.querySelector(".title").innerText;
  document.location = "editar.php?id=" + id + "&n=" + nome;
}
function excluir(id) {
  fetch("/delete.php?id=" + id, { method: "GET" }).then((res) => {
    console.log("ok");
  });
}

