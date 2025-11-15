function parseQueryString(query) {
    const params = query.split("&");
    const result = {};
    params.forEach(par => {
        const [chave, valorBruto] = par.split("=");
        const valor = decodeURIComponent(valorBruto);
        const numero = Number(valor);
        result[chave] = isNaN(numero) ? valor : numero;
    });
    return result;
}
