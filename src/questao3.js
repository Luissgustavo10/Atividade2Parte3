function normalizarUsuarios(json) {
    const usuarios = JSON.parse(json);
    return usuarios.map(usuario => {
        const nomeNormalizado = usuario.nome
            .trim()
            .split(/\s+/)
            .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())

        const emailNormalizado = usuario.email.toLowerCase();
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalizado);
        const idade = Number(usuario.idade);
        const maiorDeIdade = idade >= 18;
        return {
            nome: nomeNormalizado,
            email: emailNormalizado,
            emailValido,
            idade,
            maiorDeIdade
        };
    });
}
