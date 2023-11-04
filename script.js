//Função para mudança de value circular

document.querySelector("#idDivLado2").style.display = "none"

var mudarValueCircular = document.querySelector("#idCircular")

mudarValueCircular.addEventListener("click", tratamentoMudarValueCircular)

function tratamentoMudarValueCircular() {
    document.querySelector("#idDivLado2").style.display = "none"
    document.querySelector("label[for='idDiametroOuLado1']").textContent = "Diametro"
}

//Função para mudança de value quadrada
var mudarValueQuadrada = document.querySelector("#idQuadrada")

mudarValueQuadrada.addEventListener("click", tratamentoMudarValueQuadrada)

function tratamentoMudarValueQuadrada() {
    document.querySelector("#idDivLado2").style.display = "block"
    document.querySelector("label[for='idDiametroOuLado1']").textContent = "Lado 1"
}


//Array pizzas circulares

const nomesComerciaisCirculares = []
const diametrosCirculares = []
const preçosCirculares = []


//Array pizzas quadradas
const nomesComerciaisQuadradas = []
const lados1Quadradas = []
const lados2Quadradas = []
const preçosQuadradas = []


// Função para colocar os intens em arrays
var enviarValores = document.querySelector("#idBotãoEnviar")

enviarValores.addEventListener("click", tratamentoEnviarValores)
function tratamentoEnviarValores() {
    let circular = document.querySelector("#idCircular").checked
    let quadrada = document.querySelector("#idQuadrada").checked

    if (circular) {
        let nomeComercial = document.querySelector("#idNomeComercial").value
        nomeComercial = nomeComercial.toUpperCase()

        let diametro = Number(document.querySelector("#idDiametroOuLado1").value)

        let preço = Number(document.querySelector("#idPreço").value)

        let valorInserido = false

        if (nomesComerciaisCirculares.length == 0) {
            nomesComerciaisCirculares.push(nomeComercial)
            diametrosCirculares.push(diametro)
            preçosCirculares.push(document.querySelector("#idPreço").value)
        } else if (nomesComerciaisCirculares.length != 0) {
            for (let i = 0; i < nomesComerciaisCirculares.length; i++) {
                if (nomesComerciaisCirculares[i] == nomeComercial) {
                    valorInserido = true
                } else if (diametrosCirculares[i] == diametro) {
                    valorInserido = true
                }
            }
            if (valorInserido) {
                alert("Este nome/tamanho de pizza já foi inserido")
            } else {
                nomesComerciaisCirculares.push(nomeComercial)
                diametrosCirculares.push(diametro)
                preçosCirculares.push(document.querySelector("#idPreço").value)
            }
        }
        document.querySelector("#idNomeComercial").value = ""
        document.querySelector("#idDiametroOuLado1").value = ""
        document.querySelector("#idLado2").value = ""
        document.querySelector("#idPreço").value = ""
    } else if (quadrada) {
        let nomeComercial = document.querySelector("#idNomeComercial").value
        nomeComercial = nomeComercial.toUpperCase()

        let lado1 = Number(document.querySelector("#idDiametroOuLado1").value)

        let lado2 = Number(document.querySelector("#idLado2").value)

        let preço = Number(document.querySelector("#idPreço").value)

        let valorInserido = false

        if (nomesComerciaisQuadradas.length == 0) {
            nomesComerciaisQuadradas.push(nomeComercial)
            lados1Quadradas.push(lado1)
            lados2Quadradas.push(lado2)
            preçosQuadradas.push(document.querySelector("#idPreço").value)
        } else if (nomesComerciaisQuadradas.length != 0) {
            for (let i = 0; i < nomesComerciaisQuadradas.length; i++) {
                if (nomesComerciaisQuadradas[i] == nomeComercial) {
                    valorInserido = true
                } else if (lados1Quadradas[i] && lados2Quadradas[i] == diametro) {
                    valorInserido = true
                }
            }
            if (valorInserido) {
                alert("Este nome/tamanho de pizza já foi inserido")
            } else {
                nomesComerciaisQuadradas.push(nomeComercial)
                lados1Quadradas.push(diametro)
                lados2Quadradas.push(lado2)
                preçosQuadradas.push(document.querySelector("#idPreço").value)
            }
        }
        document.querySelector("#idNomeComercial").value = ""
        document.querySelector("#idDiametroOuLado1").value = ""
        document.querySelector("#idLado2").value = ""
        document.querySelector("#idPreço").value = ""
    } else {
        alert("Você deve escolher um tipo de pizza")
    }



// Função para colocar os intens em arrays principais e ordená-los
    const areasCirculares = []
    for (let i = 0; i < diametrosCirculares.length; i++) {
        let raio = diametrosCirculares[i] / 2
        areasCirculares[i] = Math.PI * (raio * raio)
    }
    console.log(areasCirculares)

    const areasQuadradas = []
    for (let i = 0; i < lados1Quadradas.length; i++) {
        areasQuadradas[i] = lados1Quadradas[i] * lados2Quadradas[i]
    }

    const custoBenefícioCirculares = []
    for (let i = 0; i < areasCirculares.length; i++) {
        custoBenefícioCirculares[i] = preçosCirculares[i] / areasCirculares[i]
    }

    const custoBenefícioQuadradas = []
    for (let i = 0; i < areasQuadradas.length; i++) {
        custoBenefícioQuadradas[i] = preçosQuadradas[i] / areasQuadradas[i]
    }

    const custoBenefícioTotal = []
    const nomesComerciaisTotal = []
    const medidasTotal = []
    const preçosTotal = []

    for (let i = 0; i < custoBenefícioCirculares.length; i++) {
        custoBenefícioTotal.push(custoBenefícioCirculares[i])
        nomesComerciaisTotal.push(nomesComerciaisCirculares[i])
        medidasTotal.push(diametrosCirculares[i])
        preçosTotal.push(preçosCirculares[i])
    }

    for (let i = 0; i < custoBenefícioQuadradas.length; i++) {
        custoBenefícioTotal.push(custoBenefícioQuadradas[i])
        nomesComerciaisTotal.push(nomesComerciaisQuadradas[i])
        medidasTotal.push(lados1Quadradas[i] + ", " + lados2Quadradas)
        preçosTotal.push(preçosQuadradas[i])
    }


    const custoBenefícioCrescente = []
    const nomesComerciaisCrescente = []
    const medidasCrescente = []
    const preçosCrescente = []

    for (let i = 0; i < custoBenefícioTotal.length; i++) {
        let contagem = -1
        for (let a = 0; a < custoBenefícioTotal.length; a++)
            if (custoBenefícioTotal[i] >= custoBenefícioTotal[a]) {
                contagem++
            }
        custoBenefícioCrescente[contagem] = custoBenefícioTotal[i]
        nomesComerciaisCrescente[contagem] = nomesComerciaisTotal[i]
        medidasCrescente[contagem] = medidasTotal[i]
        preçosCrescente[contagem] = preçosTotal[i]
    }
    console.log(custoBenefícioCrescente)

    // Colocar em uma tabela
    let tbody = document.querySelector("#idTbody")
    tbody.innerHTML = ""
    for (let i = 0; i < custoBenefícioCrescente.length; i++) {
        let nomeTD = nomesComerciaisCrescente[i]
        let tamanhoTD = medidasCrescente[i]
        let preçoTD = preçosCrescente[i]
        let custoBenefícioTD = custoBenefícioCrescente[i]

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")

        td1.innerHTML = nomeTD
        td2.innerHTML = tamanhoTD
        td3.innerHTML = preçoTD
        td4.innerHTML = custoBenefícioTD

        tbody.appendChild(tr)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
    }
}