const alunos = [
    {
        nome: "Felipe",
        nota: 9,
        turma: "2A",
    },
    {
        nome: "João",
        nota: 6,
        turma: "2A",
    },
    {
        nome: "Miguel",
        nota: 7,
        turma: "8A",
    }
];
function verificarAprovacao(array,media){
    let alunosAprovados = [];
    let alunosReprovados = [];

    for(i = 0; i < array.length; i++){
        const {nota,nome} = array [i];
        if(nota >= media){
            alunosAprovados.push(nome);
        } else {
            alunosReprovados.push(nome);
        }
    }
    console.log(`Os alunos aprovados foram: ${alunosAprovados}`);
    console.log(`Os alunos reprovados foram: ${alunosReprovados}`);
}

verificarAprovacao(alunos,7);