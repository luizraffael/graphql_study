const { usuarios, perfis} = require('../data/db.js')
module.exports = {
    ola(){
            return 'Bom dia!!'
    },
    horaAtual(){
        return new Date
    },
    usuarioLogado(){
        return{
            id: 1,
            nome: 'Maria Joana',
            email: 'maria@maria.com',
            idade: '21',
            salario_real: 1999.50 
        }

    },
    produtoEmDestaque(){
        return {
            nome: 'Arroz',
            preco: 100,
            desconto: 0.15              
        }
    },
    usuarios(){
        return usuarios
    },
    usuario(_, args){
        const selecionados = 
        usuarios.filter(u => u.id === args.id)
        return selecionados ? selecionados[0] : null
    }, perfis(){
        return perfis
    },
    perfil(_, args){
        const selected = 
        perfis.filter(u => u.id === args.id)
        return selected ? selected[0] : null
    }
}