function formatarProdutos(jsonString) {
    const data = JSON.parse(jsonString);
    const itens = data.itens;

    return itens.map(item => {
        const precoFormatado = item.preco.toFixed(2).replace('.', ',');
        return `${item.nome} - R$ ${precoFormatado} (Categoria: ${item.categoria})`;
    });
}
const produtosJSON = `{
 "itens": [
   {
     "id": 1,
     "nome": "Notebook Gamer",
     "preco": 2999.99,
     "categoria": "eletronicos",
     "tags": ["tecnologia", "computacao", "gamer"]
   },
   {
     "id": 2,
     "nome": "Mesa Escritório",
     "preco": 450.50,
     "categoria": "moveis",
     "tags": ["escritorio", "madeira", "profissional"]
   }
 ]
}`;
const resultado = formatarProdutos(produtosJSON);
console.log(resultado);
