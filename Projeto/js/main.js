const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("salvo");
});
function salvar() {
  var n = document.getElementById("nome").value;
  var p = document.getElementById("preco").value;
  var x = "INSERT INTO produtos VALUES('" + n + "'," + p + ")";
  console.log(x);
}
