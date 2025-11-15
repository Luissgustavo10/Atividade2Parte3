function sanitizarDado(dados) {
    const mascarar = (valor, visiveis = 4) => {
        if (!valor) return "";
        const tamanho = valor.length;
        return "*".repeat(tamanho - visiveis) + valor.slice(tamanho - visiveis);
    };
    const copia = JSON.parse(JSON.stringify(dados));
    copia.usuarios = copia.usuarios.map(u => ({
        nome: u.nome,
        cpf: mascarar(u.cpf, 2),          
        cartaoCredito: mascarar(u.cartaoCredito, 4),
        telefone: mascarar(u.telefone, 4)
    }));
    copia.metadata = {
        ip: mascarar(copia.metadata.ip, 3),
        token: mascarar(copia.metadata.token, 6)
    };
    return copia;
}
