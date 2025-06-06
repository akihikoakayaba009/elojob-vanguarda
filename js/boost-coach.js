//chama as funções ao cliclar no select ligaAtual
$("#ligaAtual").change(() => {
  AddLoad();
  if (ligaAtual.value == 1) {
    document.getElementById("obs").innerText =
      "OBS: Não Possui acompanhamento mensal";
  } else if (ligaAtual.value == 5) {
    document.getElementById("obs").innerText =
      "OBS: +2 aulas práticas + acompanhamento de 30 dias grátis";
  } else {
    document.getElementById("obs").innerText =
      "OBS: +5 aulas práticas + acompanhamento de 30 dias grátis";
  }
});

// liga e desliga a animação de load
function AddLoad() {
  var load = document.getElementById("load");

  load.classList.remove("d-none");

  document.getElementById("contentEloFinal").classList.add("d-none");
  document.getElementById("obs").classList.add("d-none");

  function Load() {
    load.classList.add("d-none");
    document.getElementById("contentEloFinal").classList.remove("d-none");
    document.getElementById("obs").classList.remove("d-none");
    mudaPreço();
  }

  setTimeout(Load, 200);
}

//muda os preços
function mudaPreço() {
  const coach = {
    1: 25,
    5: 110,
    10: 200,
  };

  calculaPreco(coach);
  desconto(coach);
}

// trata o nome capturado
function trataNome(id) {
  return document
    .getElementById(id)
    .textContent.toLocaleLowerCase()
    .replaceAll(" ", "")
    .trim();
}

//faz o calculo do preço
function calculaPreco(tipoJogo) {
  let atual = document.getElementById("ligaAtual").value;

  let resultado;
  let resultadoFinal;

  resultado = tipoJogo[`${atual}`];

  resultadoFinal = resultado / 0.8;

 

  document.getElementById(
    "valor"
  ).innerHTML = `<small>POR:</small> ${moedaBrasil(resultado)}`;
}

function desconto(tipoJogo) {
  let atual = document.getElementById("ligaAtual").value;

  let resultado;

  resultado = tipoJogo[`${atual}`];

  descontoFinal = resultado / 0.8;

  document.getElementById("desconto").innerHTML = `<small>DE:  ${moedaBrasil(
    descontoFinal
  )} </small>`;
}
// formata o numero para moeda brasileira
function moedaBrasil(valor) {
  var valor;
  var valorFormatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valorFormatado;
}
