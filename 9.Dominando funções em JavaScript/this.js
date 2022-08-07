const Joao = {
    nome: "João",
    idade: 17
};
const Maria = {
    nome: "Maria",
    idade: 23
};
const Rafael = {
    nome: "Rafael",
    idade: 42
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade;`
};

console.log(calculaIdade.call(Joao, 25));

console.log(calculaIdade.apply(Maria,[70]));