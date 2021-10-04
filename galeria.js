'use strict'

const imagens = [
    "imagens/sasuke_4guerra.jpg",
    "imagens/sasuke_adulto.jpg",
    "imagens/sasuke_bebe.png",
    "imagens/sasuke_classico.png",
    "imagens/sasuke_crianca.png",
    "imagens/sasuke_mangeykyo.jpg",
    "imagens/sasuke_shippuden.png",
    "imagens/sasuke_susanoo.png"
]

const pegarId = (url) => {
    const posBarra = url.lastIndexOf("/") + 1
    
    const posPonto = url.lastIndexOf(".") 
    return url.substring(posBarra, posPonto)
}

const criarItem = (urlImagem) => {
    const container = document.querySelector("#galeria_container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${pegarId(urlImagem)}`
    novoLink.classList.add("galeria_itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)


    // container.innerHTML += `
    //         <a href="#sasuke_bebe" class="galeria_itens">
    //             <img src="${urlImagem}" alt="">
    //         </a>

    // `


}

const carregarGaleria = (imgs) => imgs.forEach(criarItem)


const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide_container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = pegarId(urlImagem)

    const indiceAnterior = indice <= 0 ? arr.length - 1 : indice - 1
    const idAnterior = pegarId(arr[indiceAnterior])
    const indiceProximo = indice >= arr.length - 1 ? 0 : indice + 1
    const idProximo = pegarId(arr[indiceProximo])



    novaDiv.innerHTML = `
        <div class="imagem_container">
            <a href="#" class="fechar">&#128473;</a>
            <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
            <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
            <img src="${urlImagem}" alt="">
        </div>
    `
    container.appendChild(novaDiv)
}


const carregarSlide = (imgs) =>imgs.forEach(criarSlide)


carregarGaleria(imagens)
carregarSlide(imagens)



// <div class="slide" id="sasuke_bebe">
//             <div class="imagem_container">
//                 <a href="#" class="fechar">&#128473;</a>
//                 <a href="#sasuke_adulto" class="navegacao anterior">&#171;</a>
//                 <a href="#sasuke_crianca" class="navegacao proximo">&#187;</a>
//                 <img src="imagens/sasuke_bebe.png" alt="">
//             </div>
//         </div>