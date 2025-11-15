function analisarTexto(texto) {
    const palavras = texto
        .replace(/[.,!?]/g, "")       
        .split(/\s+/)                
        .filter(p => p.length > 0); 
    const totalPalavras = palavras.length;
    const mapaFreq = {};
    for (const palavra of palavras) {
        mapaFreq[palavra] = (mapaFreq[palavra] || 0) + 1;
    }
    const frequenciaPalavras = Object.keys(mapaFreq).map(p => ({
        palavra: p,
        frequencia: mapaFreq[p]
    }));
    const somaTamanhos = palavras.reduce((acc, p) => acc + p.length, 0);
    const tamanhoMedioPalavras = (somaTamanhos / totalPalavras).toFixed(1);
    return {
        totalPalavras,
        frequenciaPalavras,
        tamanhoMedioPalavras: Number(tamanhoMedioPalavras)
    };
}
