const {usuarios, proximoId} = require ('../data/db')

function indiceUsuario(filter){
    if (!filter) return -1
    const {id, email} = filter 
    if (id){
        return usuarios.findIndex(u => u.id === id)
    }else if (email){
        return usuarios.findIndex(u => u.email === email)
    }
    return -1
}

module.exports = {
    //nome, email, idade
    novoUsuario(_, {dados }){
        const emailExistente = usuarios.some(u => u.email === dados.email)
        if(emailExistente){
            throw new Error('E-mail cadastrado')
        }
        const novo = {
            id: proximoId(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }
        usuarios.push(novo)
        return novo
    },
    excluirUsuario(_, {filter}){
        const i = indiceUsuario(filter)
        if (i < 0) return null
        const excluidos = usuarios.splice(i ,1)
        return excluidos ? excluidos[0] : null
    },
    alterarUsuario(_, args){
        const i = usuarios.findIndex(u => u.id === args.id)
        if (i < 0) return null
       
        const usuario = {
            ...usuarios[i],
            ...args
        }
        usuarios.splice(i, 1 , usuario) //remove elemento e add outro
        return usuario;

    }
}