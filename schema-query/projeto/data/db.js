
const usuarios = [
    {
        id: 1,
        nome: 'Maria das Graças',
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: 2, 
        nome: 'Joao das Graças',
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: 3, 
        nome: 'Ezequiel das Graças',
        perfil_id: 1,
        status: 'BLOQUEADO'
    }   
]
const perfis = [
    {
        id: 1,
        perfil: 'Comum'
    },
    {
        id: 2, 
        perfil: 'Administrador'
    }
]

module.exports = {usuarios, perfis}