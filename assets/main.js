/* 
Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

var zucchine = [
    {
        varieta: 'alberello',
        peso: 0.5,
        lunghezza: 20
    },
    {
        varieta: 'nera di milano',
        peso: 0.3,
        lunghezza: 13
    },
    {
        varieta: 'alberello',
        peso: 0.4,
        lunghezza: 21
    },
    {
        varieta: 'tonda di nizza',
        peso: 0.7,
        lunghezza: 23
    },
    {
        varieta: 'lunga fiorentina',
        peso: 0.5,
        lunghezza: 17
    },
    {
        varieta: 'lunga fiorentina',
        peso: 0.45,
        lunghezza: 22
    },
    {
        varieta: 'zucchino giallo',
        peso: 0.25,
        lunghezza: 16
    },
    {
        varieta: 'zucchino romanesco',
        peso: 0.38,
        lunghezza: 16
    },
    {
        varieta: 'striata di napoli',
        peso: 0.18,
        lunghezza: 11
    },
    {
        varieta: 'bianca triestina',
        peso: 0.26,
        lunghezza: 10
    },
    
]

sommaPeso = 0;
for (var i = 0; i < 10; i++){
    sommaPeso = sommaPeso + zucchine[i].peso;
}
console.log('peso sommato di tutte le zucchine: ' + sommaPeso.toFixed(2) + ' kilogrammi');