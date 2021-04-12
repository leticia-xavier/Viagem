var cartas = Array(12), textos = []

function Preencher (cartas, textos){
	cartas[ 0]="Arabias.jpg"
	cartas[ 1]="Campo.jpg"
	cartas[ 2]="Cruzeiro.png"
	cartas[ 3]="Espaco.jpg"
	cartas[ 4]="Inglaterra.jpg"
	cartas[ 5]="Italia.jpg"
	cartas[ 6]="Moscou.jpg"
	cartas[ 7]="Neve.png"
	cartas[ 8]="Paris.jpg"
	cartas[ 9]="Praia.jpg"
	cartas[10]="Rafting.jpg"
	cartas[11]="Resort.jpg"

	textos[ 0] = "Um passeio de camelo pelas pirâmides"
	textos[ 1] = "Descansar na casa de campo"
	textos[ 2] = "Um Cruzeiro pelas Bahamas"
	textos[ 3] = "Enfim, conhecer <b>Marte</b>"
	textos[ 4] = "Conhecer o Big Ben"
	textos[ 5] = "Passear de Gôndola em Veneza"
	textos[ 6] = "Visitar a arquitetura de Moscou"
	textos[ 7] = "Procurar o Papai Noel"
	textos[ 8] = "Tomar um café de tarde em Paris"
	textos[ 9] = "Aproveitar o calor do Nordeste Brasileiro"
	textos[10] = "Tomar coragem e fazer aquele rafting"
	textos[11] = "Passar uns 15 dias num belo de um resort"
}

function Destaca (objImagem, destacar){
// variável destacar virá com 0 (false) ou 1 (true)
if(destacar)
	objImagem.style.top="-20px" // sobe 20 pixels na tela
else
	objImagem.style.top="0px" // volta para sua posição anterior
}

function Randomizar (cartas){
   // Esta rotina envia para o método sort uma função, que gera um número randômico e
   // internamente randomiza as posições das suas cartas
   cartas = cartas.sort(() => Math.random() - 0.5)
}
function Viagem(numCarta) {
	var nomeImagem = cartas[numCarta-1]
	
	// criando uma nova imagem
	var novaImagem = document.createElement("img")
	
	// Inserindo o nome do arquivo selecionado na imagem da matriz
	novaImagem.src = "imgs/" + nomeImagem
	
	// Limpando a área de resultado
	resultado.innerHTML = ""
	
	// Inserindo a imagem dentro da área de resultado
	resultado.appendChild(novaImagem)
	resultado.innerHTML += "<br>" + textoImg(nomeImagem)
}
function textoImg(nomeImagem) {
	var resultado=""
	
	if( nomeImagem.includes("Arabia")) 		{ resultado=textos[0] }
	if( nomeImagem.includes("Campo") ) 		{ resultado=textos[1] }
	if( nomeImagem.includes("Cruzeiro")) 	{ resultado=textos[2] }
	if( nomeImagem.includes("Espaco")) 		{ resultado=textos[3] }
	if( nomeImagem.includes("Inglaterra") ) { resultado=textos[4] }
	if( nomeImagem.includes("Italia")) 		{ resultado=textos[5] }
	if( nomeImagem.includes("Moscou")) 		{ resultado=textos[6] }
	if( nomeImagem.includes("Neve")) 		{ resultado=textos[7] }
	if( nomeImagem.includes("Paris")) 		{ resultado=textos[8] }
	if( nomeImagem.includes("Praia")) 		{ resultado=textos[9] }
	if( nomeImagem.includes("Rafting")) 	{ resultado=textos[10]}
	if( nomeImagem.includes("Resort")) 		{ resultado=textos[11]}
	
	return(resultado)
}