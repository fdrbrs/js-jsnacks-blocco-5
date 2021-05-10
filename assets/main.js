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

/* 
Snack 2:
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

var zucchineSotto15 = [];
var zucchineSopra15 = [];
var zucchineSotto15Peso = 0;
var zucchineSopra15Peso = 0;

for (var i = 0; i < 10; i++){
    if (zucchine[i].lunghezza < 15) {
        zucchineSotto15.push(zucchine[i])
        zucchineSotto15Peso = zucchineSotto15Peso + zucchine[i].peso;
    } else {
        zucchineSopra15.push(zucchine[i])
        zucchineSopra15Peso = zucchineSopra15Peso + zucchine[i].peso;
    }
}

console.log('le zucchine lunghe meno di 15 cm pesano in totale: ' + zucchineSotto15Peso + ' kilogrammi');
console.log('le zucchine lunghe almeno 15 cm pesano in totale: ' + zucchineSopra15Peso  + ' kilogrammi');

//Snack 3
//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

var stringaDaGirare = prompt('Inserisci una stringa e te la restituirò girata');

function giraStringa(stringa) {
    var stringaGirata = stringa.split("").reverse().join("");
    return stringa  + " girata diventa " + stringaGirata;
}

console.log(giraStringa(stringaDaGirare));

/* 
Snack 4:
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

var numeri = [1, 2, 3, 4, 5];
var lettere = ['a', 'b', 'c', 'd', 'e']

function fondiArray(array1, array2) {
    var arrayFusi = [];
    for (var i = 0; i < array1.length; i++){
        arrayFusi.push(array1[i]);
        arrayFusi.push(array2[i]);
    }
    return arrayFusi;
}

console.log(fondiArray(numeri, lettere));

/* 
Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
*/

function fromToArray(min, max, array) {
    if (max > array.length) {
        alert('valore massimo non valido')
    } else if (min > max ) {
        alert('valore minimo non valido')
    } else {
        var returnArray = [];
        for (var i = min; i <= max; i++){
            returnArray.push(array[i])
        }
    }
    return returnArray;
}

//provo la funzione

var arrayProva = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l']

console.log(fromToArray(2,8,arrayProva));
