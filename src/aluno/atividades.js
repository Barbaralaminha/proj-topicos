const objs = [
    {
        materia: "Moda",
        horario: 15,
        professor: "Vinicius Silva",
        materiais: ["História da Moda", "Estilos Diversos", "Encontre seu Estilo"]
    },

    {
        materia: "Hoquei no Gelo",
        horario: 10,
        professor: "Silvia Maria",
        materias: ["Equilíbrio", "Primeiros Passos", "Saber Cair"]
    },

    {
        materia: "Teatro",
        horario: 14,
        professor: "Roger Malagetto",
        materias: ["Expressão Corporal", "Medo de Público", "Alongamento Final"]
    }
]

const jsonData = JSON.stringify(objs) 
console.log(jsonData)