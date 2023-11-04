//Função para mudança de value circular

document.querySelector("#idLado2").style.display = "none"
document.querySelector("#idLado2Label").style.display = "none"

var mudarValueCircular = document.querySelector("#idCircular")

mudarValueCircular.addEventListener("click", tratamentoMudarValueCircular)

function tratamentoMudarValueCircular() {
    document.querySelector("#idLado2").style.display = "none"
    document.querySelector("#idLado2Label").style.display = "none"
    document.querySelector("label[for='idDiametroOuLado1']").textContent = "Diametro"
}

//Função para mudança de value quadrada
var mudarValueQuadrada = document.querySelector("#idQuadrada")

mudarValueQuadrada.addEventListener("click", tratamentoMudarValueQuadrada)

function tratamentoMudarValueQuadrada() {
    document.querySelector("#idLado2").style.display = "block"
    document.querySelector("#idLado2Label").style.display = "block"
    document.querySelector("label[for='idDiametroOuLado1']").textContent = "Lado 1"
}


//Array pizzas 
const pizzas = []

// Função para colocar os intens em arrays
var enviarValores = document.querySelector("#idBotãoEnviar")

enviarValores.addEventListener("click", tratamentoEnviarValores)
function tratamentoEnviarValores() {
    let circular = document.querySelector("#idCircular").checked
    let quadrada = document.querySelector("#idQuadrada").checked

    if (circular) {
        // Declarando as variáveis
        let nomeComercial = document.querySelector("#idNomeComercial").value
        nomeComercial = nomeComercial.toUpperCase()

        let diametro = Number(document.querySelector("#idDiametroOuLado1").value)

        let preço = Number(document.querySelector("#idPreço").value)

        let raio = diametro / 2
        area = Math.PI * (raio * raio)

        let custoBenefício = preço / area

        let valorInserido = false

        if (diametro == "" || preço == "" || nomeComercial == '') {
            alert("Insira todos os dados")
        } else if (diametro >= 1000) {
            alert("O tamanho da pizza é grande demais")
        } else if (pizzas.length == 0) {
            let pizza = {
                nomeComercial: nomeComercial,
                diametro: diametro,
                preço: preço,
                area: area,
                custoBenefício: custoBenefício,
                medidas: diametro,
                custoBenefícioPorcentagem: ""
            }
            pizzas.push(pizza)
        } else if (pizzas.length != 0) {
            pizzas.forEach(element => {
                if (element.nomeComercial == nomeComercial) {
                    valorInserido = true
                }
            });
            if (valorInserido) {
                alert("Este nome de pizza já foi inserido")
            } else {
                let pizza = {
                    nomeComercial: nomeComercial,
                    diametro: diametro,
                    preço: preço,
                    area: area,
                    custoBenefício: custoBenefício,
                    medidas: diametro,
                    custoBenefícioPorcentagem: ""
                }
                pizzas.push(pizza)
            }
        }
    } else if (quadrada) {
        let nomeComercial = document.querySelector("#idNomeComercial").value
        nomeComercial = nomeComercial.toUpperCase()

        let lado1 = Number(document.querySelector("#idDiametroOuLado1").value)

        let lado2 = Number(document.querySelector("#idLado2").value)

        let preço = Number(document.querySelector("#idPreço").value)

        let area = lado1 * lado2

        let custoBenefício = preço / area

        let valorInserido = false

        if (lado1 == "" || lado2 == "" || preço == "" || nomeComercial == '') {
            alert("Insira todos os dados")
        } else if (lado1 >= 1000 || lado2 >= 1000) {
            alert("O tamanho da pizza é grande demais")
        } else if (pizzas.length == 0 && pizzas.length == 0) {
            let pizza = {
                nomeComercial: nomeComercial,
                lado1: lado1,
                lado2: lado2,
                preço: preço,
                area: area,
                custoBenefício: custoBenefício,
                medidas: lado1 + " x " + lado2,
                custoBenefícioPorcentagem: ""
            }
            pizzas.push(pizza)
        } else if (pizzas.length != 0 || pizzas.length != 0) {
            pizzas.forEach(element => {
                if (element.nomeComercial == nomeComercial) {
                    valorInserido = true
                }
            });
            if (valorInserido) {
                alert("Este nome de pizza já foi inserido")
            } else {
                let pizza = {
                    nomeComercial: nomeComercial,
                    lado1: lado1,
                    lado2: lado2,
                    preço: preço,
                    area: area,
                    custoBenefício: custoBenefício,
                    medidas: lado1 + "x" + lado2,
                    custoBenefícioPorcentagem: ""
                }
                pizzas.push(pizza)
            }
        }
    } else {
        alert("Você deve escolher um tipo de pizza")
    }
    document.querySelector("#idNomeComercial").value = ""
    document.querySelector("#idDiametroOuLado1").value = ""
    document.querySelector("#idLado2").value = ""
    document.querySelector("#idPreço").value = ""

    // Função para ordenar os custos benefícios
    pizzas.sort(function (a,b) {
        if (a.custoBenefício > b.custoBenefício) {
            return 1
        }
        if (a.custoBenefício < b.custoBenefício) {
            return -1
        }
        return 0
    })

    pizzas[0].custoBenefícioPorcentagem = "Melhor Custo-Benefício"

    for (let i = 1; i < pizzas.length; i++) {
        pizzas[i].custoBenefícioPorcentagem = (pizzas[i].custoBenefício - pizzas[0].custoBenefício) / pizzas[0].custoBenefício * 100
        pizzas[i].custoBenefícioPorcentagem = pizzas[i].custoBenefícioPorcentagem.toFixed(2) + "% mais cara."
    }

    // Colocar em uma tabela
    let tbody = document.querySelector("#idTbody")
    tbody.innerHTML = ""

    pizzas.forEach(element => {
        let nomeTD = element.nomeComercial
        let areaTD = element.area
        let tamanhoTD = element.medidas        
        let preçoTD = element.preço
        let custoBenefícioTD = element.custoBenefício
        let custoBenefícioPorcentagemTD = element.custoBenefícioPorcentagem

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")

        td1.innerHTML = nomeTD
        td2.innerHTML = areaTD.toFixed(2)
        td3.innerHTML = tamanhoTD
        td4.innerHTML = preçoTD
        td5.innerHTML = custoBenefícioTD.toFixed(5)
        td6.innerHTML = custoBenefícioPorcentagemTD

        tbody.appendChild(tr)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
    });
}
