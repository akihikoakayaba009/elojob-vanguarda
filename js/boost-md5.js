//muda a imagem quando seleciona outra nome e coloca a animação de load
//quando mudar a liga atual
$("#ligaAtual").change(() => {
  if (trataNome("choice") == "valorant") {
    document.getElementById(
      "imgAtual"
    ).src = `img/elos/valorant/${ligaAtual.value}.webp`;
  } else {
    document.getElementById(
      "imgAtual"
    ).src = `img/elos/${ligaAtual.value}.webp`;
  }
  AddLoad();
});

// liga e desliga a animação de load
function AddLoad() {
  var load = document.getElementById("load");

  load.classList.remove("d-none");

  document.getElementById("contentEloFinal").classList.add("d-none");

  function Load() {
    load.classList.add("d-none");
    document.getElementById("contentEloFinal").classList.remove("d-none");
  }

  setTimeout(Load, 200);
}

// trata o title da pagina capturado
function trataNome(id) {
  return document
    .getElementById(id)
    .textContent.toLocaleLowerCase()
    .replaceAll(" ", "")
    .trim();
}
function calculaPrecoMD5(tipoJogo) {
  let atual = document.getElementById("ligaAtual").value;

  if (!tipoJogo.hasOwnProperty(atual)) {
    alert("Liga inválida!");
    return;
  }

  let partidas = tipoJogo[atual]; // Obtém o número de partidas
  let precoBase = partidas * 10; // Calcula o preço base (cada partida = R$ 10,00)
  let precoFinal = precoBase * 1.5; // Aplica o aumento de 50%

  let precoMD5 = md5(precoFinal.toString()); // Converte para MD5

  document.getElementById("valor").innerHTML = `<small>POR:</small> ${precoMD5}`;
}

// Exemplo de uso com o mesmo objeto de ligas
const ligasMD5 = {
  ferro: 8,
  ferro2: 16,
  ferro3: 24,
  bronze1: 34,
  bronze2: 44,
  bronze3: 54,
  prata1: 66,
  prata2: 78,
  prata3: 90,
  ouro1: 104,
  ouro2: 118,
  ouro3: 132,
  platina1: 150,
  platina2: 168,
  platina3: 186,
  diamante1: 212,
  diamante2: 238,
  diamante3: 264,
  ascendente1: 300,
  ascendente2: 336,
  ascendente3: 372,
  imortal1: 452,
};

// Você precisa incluir a biblioteca MD5 no HTML
// Adicione isso antes do fechamento do <body> no seu HTML:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js"></script>

