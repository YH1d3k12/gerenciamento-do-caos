document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#novo");
  const produtosSection = document.querySelector("#produtos");

  // Função para limpar e validar texto
  function sanitizeText(input) {
    const clean = input.replace(/[<>]/g, "").trim(); // remove tags simples
    return clean.substring(0, 50); // limite de tamanho
  }

  // Função para validar e formatar o preço
  function sanitizePrice(input) {
    const clean = input.replace(/[^0-9.,]/g, "").replace(",", ".");
    const valor = parseFloat(clean);
    if (isNaN(valor) || valor <= 0) return null;
    return valor.toFixed(2);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = sanitizeText(form.nome.value);
    const preco = sanitizePrice(form.preco.value);

    if (!nome || !preco) {
      alert(
        "Por favor, preencha os campos corretamente (preço numérico e nome válido)."
      );
      return;
    }

    const id = Date.now();

    // Criação manual para evitar XSS
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = id;

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = nome;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `R$ ${preco}`;

    const editBtn = document.createElement("button");
    editBtn.classList.add("editar");
    editBtn.textContent = "Editar";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("excluir");
    deleteBtn.textContent = "Excluir";

    card.append(title, price, editBtn, deleteBtn);
    produtosSection.appendChild(card);

    form.reset();
  });

  produtosSection.addEventListener("click", (e) => {
    const target = e.target;
    const card = target.closest(".card");
    if (!card) return;

    const id = card.dataset.id;

    if (target.classList.contains("editar")) {
      const nomeAtual = card.querySelector(".title").textContent;
      const precoAtual = card
        .querySelector(".price")
        .textContent.replace("R$", "")
        .trim();

      const novoNome = sanitizeText(
        prompt("Novo nome do produto:", nomeAtual) || ""
      );
      const novoPreco = sanitizePrice(prompt("Novo preço:", precoAtual) || "");

      if (!novoNome || !novoPreco) {
        alert("Valores inválidos. Edição cancelada.");
        return;
      }

      card.querySelector(".title").textContent = novoNome;
      card.querySelector(".price").textContent = `R$ ${novoPreco}`;
      alert(`Produto ${id} atualizado!`);
    }

    if (target.classList.contains("excluir")) {
      const confirmar = confirm("Deseja excluir este produto?");
      if (confirmar) {
        card.remove();
        alert(`Produto ${id} removido!`);
      }
    }
  });
});
