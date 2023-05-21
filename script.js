let num = document.getElementById("fnum");
let lista = document.getElementById("flista");
let res = document.getElementById("res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n) {
  if (valores.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor invalido ou ja encontrado na lista.");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores para continuar");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }

    media = soma / total;

    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`;
    res.innerHTML += `<p>O menor valor é ${menor} e o maior valor é ${maior}`;
    res.innerHTML += `<p>A soma de todos os valores é ${soma}`;
    res.innerHTML += `<p>A média dos valores é ${media.toFixed(1)}`;
  }
}
