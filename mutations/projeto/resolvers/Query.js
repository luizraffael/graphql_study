const { usuarios, perfis } = require('../data/db')

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
    usuarios() {
        return usuarios
    },
    usuario(_, { filter}) {
       // const sels = usuarios
        //    .filter(u => u.id === id)
        //return sels ? sels[0] : null
        const i = indiceUsuario(filter)
        if (i < 0 ) return null
        return usuarios [1]

    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis
            .filter(p => p.id === id)
        return sels ? sels[0] : null 
    }
}