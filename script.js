// App web supermercado

    var items = []

    document.getElementById('cadastrar').addEventListener('click', () => {
        // fUNÇÃO PARA CADASTRAR PRODUTO

        let nomeProduto = document.querySelector('input[name=nome]')
        let quantidadeProduto = document.querySelector('input[name=quant]')
        let valorProduto = document.querySelector('input[name=valor]')

        while (nomeProduto.value == 0 || quantidadeProduto.value == 0 || valorProduto.value == 0){

            if (nomeProduto.value == 0){
                alert('Insira o nome do produto')
            }else if (quantidadeProduto.value == 0){
                alert('Insira a quantidade de produtos')
            }else if (valorProduto.value == 0){
                alert('Insira o valor do produto')
            }
            
            return
        }

        items.push({
            nome: nomeProduto.value,
            quantidade: quantidadeProduto.value,
            valor: valorProduto.value * quantidadeProduto.value
        })

        /*
            <div class="lista-produtos bg-green-200 w-4/5 my-2 mx-auto py-5 pl-6 h-auto shadow-2xl flex">
            <h2 class="w-1/3 font-mono text-xl font-bold">Café</h2>
            <p class=" w-1/3 font-mono font-bold italic">Quantidade: 2</p>
            <p class="w-1/3 font-mono font-bold italic">Valor: R$20,00</p>
            </div>
        */

        let listaProdutos = document.querySelector('.lista-produtos')
        var soma = 0
        // Essa função limpa o conteudo da lista anterior, podendo guardar uma nova lista
        listaProdutos.innerHTML = ""
        items.map((val) => {

            soma += parseFloat(val.valor)
            
            listaProdutos.innerHTML += `
            <div class="lista-produtos bg-green-200 w-4/5 my-2 mx-auto py-5 pl-6 h-auto shadow-2xl">
                <h2 class="w-1/3 font-mono text-xl font-bold">`+val.nome+`</h2>
                <p class=" w-1/3 font-mono font-bold italic">Quantidade: `+val.quantidade+`</p>
                <p class="w-1/3 font-mono font-bold italic">Valor: R$`+val.valor.toFixed(2)+`</p>
            </div>
            `


        })

        
        soma = soma.toFixed(2)
        nomeProduto.value = ""
        quantidadeProduto.value = ""
        valorProduto.value = ""

        let elementSoma = document.querySelector('.soma-produtos h1')
        elementSoma.innerHTML = 'R$' + soma

    })

    document.querySelector('button[name=limpar]').addEventListener('click', () => {
        items = []
        document.querySelector('.lista-produtos').innerHTML = ""
        document.querySelector('.soma-produtos h1').innerHTML = 'R$ 0,00'
    })