
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

function criarElemento(itens, ul){
    for (let i = 0; i < itens.length; i ++){
     let divCriarCard = document.createElement('div')
      divCriarCard.className = 'card'
     let divtratarImg = document.createElement('div')
      divtratarImg.className = 'tratarImg'
      divCriarCard.appendChild(divtratarImg)
     let inserirImg = document.createElement('img')
     inserirImg.src = itens[i].image
     divtratarImg.appendChild(inserirImg)
     let pTitulo = document.createElement('p')
     pTitulo.className = 'nomeIten'
     pTitulo.innerText = itens[i].name
     divCriarCard.appendChild(pTitulo)
     let pValorIten = document.createElement('p')
     pValorIten.className = 'valorItem'
     pValorIten.innerText = itens[i].price
     divCriarCard.appendChild(pValorIten)
     
     
     console.log(selectList1)
     let criarLi = document.createElement('li')
     criarLi.appendChild(divCriarCard)
     ul.appendChild(criarLi)
     let adicionarSecao1 = document.querySelector(".actions")
     adicionarSecao1.appendChild(selectList1)

    }
}
let selectList1 = document.querySelector(".list1")
let selectList2 = document.querySelector(".list2")
criarElemento(listFigures, selectList1)

criarElemento(listFrames, selectList2)


