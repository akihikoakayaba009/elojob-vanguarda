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

  if (
    ligaAtual.value == "mestre" ||
    ligaAtual.value == "graoMestre" ||
    ligaAtual.value == "desafiante" ||
    ligaAtual.value == "radiante"
  ) {
    $(".form-group#boxDivisaoAtual").addClass("d-none");
  } else {
    $(".form-group#boxDivisaoAtual").removeClass("d-none");
  }

  AddLoad();
});

//muda a imagem quando seleciona outra nome e coloca a animação de load
// quando mudar a liga desejada
$("#ligaDesejada").change(() => {
  if (trataNome("choice") == "valorant") {
    document.getElementById(
      "imgDesejada"
    ).src = `img/elos/valorant/${ligaDesejada.value}.webp`;
  } else {
    document.getElementById(
      "imgDesejada"
    ).src = `img/elos/${ligaDesejada.value}.webp`;
  }

  // se for mestre, desafiante ou grão mestre ele tira o select de divisão
  if (
    ligaDesejada.value == "mestre" ||
    ligaDesejada.value == "graoMestre" ||
    ligaDesejada.value == "desafiante" ||
    ligaDesejada.value == "radiante"
  ) {
    $(".form-group#boxDivisaoDesejada").addClass("d-none");
  } else {
    $(".form-group#boxDivisaoDesejada").removeClass("d-none");
  }

  AddLoad();
});

// quando mudar a divisão atual
$("#divisaoAtual").change(() => {
  AddLoad();
});

//quando mudar a divisão desejada
$("#divisaoDesejada").change(() => {
  AddLoad();
});

// liga e desliga a animação de load
function AddLoad() {
  var load = document.getElementById("load");

  load.classList.remove("d-none");

  document.getElementById("contentEloFinal").classList.add("d-none");
  document.getElementById("alert").classList.add("d-none");

  function Load() {
    load.classList.add("d-none");

    if (trataNome("choice") == "leagueoflegends") {
      mudaPreçoLOL();
    } else if (trataNome("choice") == "wildrift") {
      mudaPreçoWild();
    } else {
      mudaPreçoValorant();
    }

    Aviso();
  }

  setTimeout(Load, 200);
}

// verifica se os elos estão certos se não manda o aviso
function Aviso() {
  var elos = {
    ferro: 1,
    bronze: 2,
    prata: 3,
    ouro: 4,
    platina: 5,
    esmeralda: 6,
    diamante: 7,
    mestre: 8,
    graoMestre: 9,
    desafiante: 10,
  };

  var elosValorant = {
    ferro: 1,
    bronze: 2,
    prata: 3,
    ouro: 4,
    platina: 5,
    diamante: 6,
    ascendente: 7,
    imortal: 8,
    radiante: 9,
  };

  let ligaAtual = document.getElementById("ligaAtual").value;
  let ligaDesejada = document.getElementById("ligaDesejada").value;
  let divisaoAtual = document.getElementById("divisaoAtual").value;
  let divisaoDesejada = document.getElementById("divisaoDesejada").value;

  // coloca o d-none
  function esconde() {
    document.getElementById("contentEloFinal").classList.add("d-none");
    document.getElementById("alert").classList.remove("d-none");
  }
  // tira o d-none
  function mostra() {
    document.getElementById("alert").classList.add("d-none");
    document.getElementById("contentEloFinal").classList.remove("d-none");
  }

  // se o jogo for valorant
  if (trataNome("choice") == "valorant") {
    if (elosValorant[`${ligaAtual}`] > elosValorant[`${ligaDesejada}`]) {
      esconde();
    } else if (
      elosValorant[`${ligaAtual}`] == elosValorant[`${ligaDesejada}`] &&
      divisaoAtual >= divisaoDesejada
    ) {
      esconde();
    } else {
      mostra();
    }
  }
  // se não é lol ou wild
  else {
    if (elos[`${ligaAtual}`] > elos[`${ligaDesejada}`]) {
      esconde();
    } else if (
      elos[`${ligaAtual}`] == elos[`${ligaDesejada}`] &&
      divisaoAtual <= divisaoDesejada
    ) {
      esconde();
    } else if (ligaAtual == "mestre" && ligaDesejada == "mestre") {
      esconde();
    } else {
      mostra();
    }
  }
}

// manda os preços do league of legends

// manda os preços do wild rift

// manda os preços do valorant
function mudaPreçoValorant() {
  const eloboost = {
    ferro1: 8,
    ferro2: 16,
    ferro3:24,

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

  const duoboost = {
    ferro1: 8 * 1.5,
    ferro2: 16 * 1.5,
    ferro3:24 * 1.5,

    bronze1: 34 * 1.5,
    bronze2: 44 * 1.5,
    bronze3: 54 * 1.5,

    prata1: 66 * 1.5,
    prata2: 78 * 1.5,
    prata3: 90 * 1.5,

    ouro1: 104 * 1.5,
    ouro2: 118 * 1.5,
    ouro3: 132 * 1.5,

    platina1: 150 * 1.5,
    platina2: 168 * 1.5,
    platina3: 186 * 1.5,

    diamante1: 212 * 1.5,
    diamante2: 238 * 1.5,
    diamante3: 264 * 1.5,

    ascendente1: 300 * 1.5,
    ascendente2: 336 * 1.5,
    ascendente3: 372 * 1.5,

    imortal1: 452 * 1.5,
  
  };

  if (trataNome("title") == "eloboost") {
    calculaPreco(eloboost);
    desconto(eloboost);
  }
  if (trataNome("title") == "duoboost") {
    calculaPreco(duoboost);
    desconto(duoboost);
  }
}

// trata o title da pagina capturado
function trataNome(id) {
  return document
    .getElementById(id)
    .textContent.toLocaleLowerCase()
    .replaceAll(" ", "")
    .trim();
}

//faz o calculo do preço
function calculaPreco(tipoJogo) {
  let atual =
    document.getElementById("ligaAtual").value +
    document.getElementById("divisaoAtual").value;
  let desejada =
    document.getElementById("ligaDesejada").value +
    document.getElementById("divisaoDesejada").value;

  let resultado;
  let resultadoFinal;

  resultado = tipoJogo[`${desejada}`] - tipoJogo[`${atual}`];

  resultadoFinal = resultado / 0.8;

 

  document.getElementById(
    "valor"
  ).innerHTML = `<small>POR:</small> ${moedaBrasil(resultado)}`;
}

// faz o desconto
function desconto(tipoJogo) {
  let desconto = 20;

  let atual =
    document.getElementById("ligaAtual").value +
    document.getElementById("divisaoAtual").value;
  let desejada =
    document.getElementById("ligaDesejada").value +
    document.getElementById("divisaoDesejada").value;

  let resultado;

  resultado = tipoJogo[`${desejada}`] - tipoJogo[`${atual}`];

  descontoFinal = resultado / 0.8;

  console.log(tipoJogo.ferro1);

  document.getElementById("desconto").innerHTML = `<small>DE: ${moedaBrasil(
    descontoFinal
  )}</small> `;
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
