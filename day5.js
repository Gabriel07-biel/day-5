let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";  
while(adicionarMais != "não"){
    adicionarMais = prompt("Você quer colocar algo na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") {  
	alert(`Não reconhecemos o pedido!`);
        adicionarMais = prompt("Você quer colocar algo na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){  
        break;
    }
	
    comida = prompt("O que você quer incluir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Não achamos a categoria!")
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);