function eloboostDuo() {
  let titles = document
    .getElementById("title")
    .textContent.toLocaleLowerCase()
    .trim();
  let ch = id("choice").textContent.toLocaleLowerCase().trim();
  let value = id("valor").textContent.replaceAll("POR", "Por").trim();

  let lga = id("ligaAtual").value.toLocaleLowerCase();
  let lgd = id("ligaDesejada").value.toLocaleLowerCase();
  let dva = id("divisaoAtual")
    .value.toLocaleLowerCase()
    .replaceAll(" ", "")
    .trim();
  let dvd = id("divisaoDesejada")
    .value.toLocaleLowerCase()
    .replaceAll(" ", "")
    .trim();

  if (ch !== "valorant") {
    var fila = id("filaDesejada").value;

    const inputs = document.querySelectorAll('input[name="flash/ignite"]');
    var fd = "";
    inputs.forEach((input) => {
      if (input.checked) {
        fd = input.value;
      }
    });
    if (fd == "") {
      fd = "Sem posição escolhida";
    }
  }

  lga = lga[0].toUpperCase() + lga.substr(1);
  lgd = lgd[0].toUpperCase() + lgd.substr(1);
  ch = ch[0].toUpperCase() + ch.substr(1);
  titles = titles[0].toUpperCase() + titles.substr(1);

  var mensagem = `Olá! Gostaria de comprar o serviço ${titles} para o jogo ${ch}.\nLiga atual: ${lga} ${dva}\nLiga desejada: ${lgd} ${dvd}\nFila: ${fila}\nPosição: ${fd}\n${value}`;

  // Codifica a mensagem para a URL
  let mensagemCodificada = encodeURIComponent(mensagem);

  // Abre o WhatsApp com o número novo
  window.open(`https://wa.me/5521981051185?text=${mensagemCodificada}`, "_blank");
}
