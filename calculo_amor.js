function calcular() {
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var resultado = document.getElementById("resultado");
  
    if ((nome1.toLowerCase() === "guilherme" && nome2.toLowerCase() === "leticia") || 
    (nome1.toLowerCase() === "leticia" && nome2.toLowerCase() === "guilherme")) {
  resultado.innerHTML = "Meu programador não permite que esses nomes sejam calculados.";
} else if ((nome1.toLowerCase() === "leticia" && nome2.toLowerCase() === "andre") || 
           (nome1.toLowerCase() === "andre" && nome2.toLowerCase() === "leticia")) {
  resultado.innerHTML = "A porcentagem de amor entre " + nome1 + " e " + nome2 + " é de 0%.";
} else {
  var porcentagem = Math.floor(Math.random() * 100) + 1;
  resultado.innerHTML = "A porcentagem de amor entre " + nome1 + " e " + nome2 + " é de " + porcentagem + "%.";
}

}
