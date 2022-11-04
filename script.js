
let listFigures = []
let listFrames = []

function separateItens(listItens){
    for (let i = 0; i < listItens.length; i ++){
        if (listItens[i].type == 'frame'){
            listFrames.push(listItens[i])
        }
        else if (listItens[i].type == 'figure'){
          listFigures.push(listItens[i])  
        }
    }
}
separateItens(todosItens)
// console.log(listFigures)
// console.log(listFrames)

function criarElemento(itens){
    for (let i = 0; i < listFigures.length; i ++){
     let divCriarCard = document.createElement('div')
      divCriarCard.className = 'card'
     let divtratarImg = document.createElement('div')
      divtratarImg.className = 'tratarImg'
      divCriarCard.appendChild(divtratarImg)
     let inserirImg = document.createElement('img')
     inserirImg.src = listFigures[i].image
     divtratarImg.appendChild(inserirImg)
     let pTitulo = document.createElement('p')
     pTitulo.className = 'nomeIten'
     pTitulo.innerText = listFigures[i].name
     divCriarCard.appendChild(pTitulo)
     let pValorIten = document.createElement('p')
     pValorIten.className = 'valorItem'
     pValorIten.innerText = listFigures[i].price
     divCriarCard.appendChild(pValorIten)
     
     let selectList1 = document.querySelector(".list1")
     console.log(selectList1)
     let criarLi = document.createElement('li')
     criarLi.appendChild(divCriarCard)
     selectList1.appendChild(criarLi)
     let adicionarSecao1 = document.querySelector(".actions")
     adicionarSecao1.appendChild(selectList1)

    }
}
criarElemento(listFigures)

function criarElemento2(itens){
    for (let i = 0; i < listFrames.length; i ++){
     let divCriarCard2 = document.createElement('div')
      divCriarCard2.className = 'card'
     let divtratarImg2 = document.createElement('div')
      divtratarImg2.className = 'tratarImg'
      divCriarCard2.appendChild(divtratarImg2)
     let inserirImg2 = document.createElement('img')
     inserirImg2.src = listFrames[i].image
     divtratarImg2.appendChild(inserirImg2)
     let pTitulo2 = document.createElement('p')
     pTitulo2.className = 'nomeIten'
     pTitulo2.innerText = listFrames[i].name
     divCriarCard2.appendChild(pTitulo2)
     let pValorIten2 = document.createElement('p')
     pValorIten2.className = 'valorItem'
     pValorIten2.innerText = listFrames[i].price
     divCriarCard2.appendChild(pValorIten2)
     
     let selectList2 = document.querySelector(".list2")
     console.log(selectList2)
     let criarLi2 = document.createElement('li')
     criarLi2.appendChild(divCriarCard2)
     selectList2.appendChild(criarLi2)
     let adicionarSecao2 = document.querySelector(".pictures")
     adicionarSecao2.appendChild(selectList2)

    }
}
criarElemento2(listFrames)


