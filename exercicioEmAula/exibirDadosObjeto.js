const objetos =  [
	{
		macas:3,
		peras:2,
		carne:1,
		frango:5,
		doces:2
	},
	{
		macas:1,
		cafes:1,
		ovos:6,
		frango:1,
		paes:4
	}
]

const listaProdutos = []

objetos.forEach((objeto) => {
   const itens = Object.keys(objeto)

    itens.forEach((item) => {
        if(!listaProdutos.includes(item))
        {
            listaProdutos.push(item)
        }
    })
})

console.log(listaProdutos)

let totalVendidos = 0;

objetos.forEach((objeto) => {
   const valores = Object.values(objeto)

   valores.forEach((valor) => {
       totalVendidos += valor
   });
});

console.log(totalVendidos)

