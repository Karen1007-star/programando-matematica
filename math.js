let arrya =[]
function promedio(arrya) {
    return arrya.reduce((acum,valor)=>acum+valor,0)/arrya.length
} 
console.log(promedio([1,2,3,4,5,6]))

function mediana(arrya){
    let cantidad=arrya.sort((a,b)=>a-b).length
    if(arrya.length % 2 == 0){
        return (arrya[(cantidad)/2-1] + arrya[(cantidad)/2])/2
    }else{
        return arrya[Math.ceil((cantidad)/2-1)]
    }
}

function moda(lista){
    const objLista = {}
    lista.forEach(element => {
        objLista[element] ? objLista[element] += 1 : objLista[element] = 1
    });
    const listArray=Object.entries(objLista)
    return listArray.sort((a,b)=>a[1]-b[1])[listArray.length-1][0]
}

console.log(moda([1,2,3,4,5,4,4,4,4,4,5,5]))
console.log(mediana([1,1,2,3,14,1,2,4,8]))
console.log(mediana([3,2,1,0]))
