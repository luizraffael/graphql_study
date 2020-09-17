const {perfis, proximoId} = require ('../../data/db')

function indicePerfil(filter){
    if (!filter) return -1
    const {id} = filter 
    if (id){
        return perfis.findIndex(u => u.id === id)
    }
    return -1
}

module.exports = {
    //nome, perfil, idade
    novoPerfil(_, {dados }){
        const perfilExistente = perfis.some(u => u.perfil === dados.perfil)
        if(perfilExistente){
            throw new Error('E-mail cadastrado')
        }
        const novo = {
            id: proximoId(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }
        perfis.push(novo)
        return novo
    },
    excluirPerfil(_, {filter}){
        const i = indiceperfil(filter)
        if (i < 0) return null
        const excluidos = perfis.splice(i ,1)
        return excluidos ? excluidos[0] : null
    },
    alterarPerfil(_, args){
        const i = perfis.findIndex(u => u.id === args.id)
        if (i < 0) return null
       
        const perfil = {
            ...perfis[i],
            ...args
        }
        perfis.splice(i, 1 , perfil) //remove elemento e add outro
        return perfil;

    }
}