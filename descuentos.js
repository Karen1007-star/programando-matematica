
// let inputprecio = document.getElementById("precio");
// let inputdescuento = document.getElementById("dscto")
// let p = document.getElementById("p")
// let botonresultador = document.getElementById("calcularDescuento")

let inputprecio = document.getElementById("precio")
let inputdescuento = document.getElementById("dscto")
let p = document.getElementById("descuento_total")
let botonresultador = document.getElementById("calcular");
botonresultador.addEventListener('click', calculaPrecio)


// const objDescuento = {
//     platzivacation: 10,
//     mothersday: 15,
//     independenceday: 20,
//     christmas: 50,
// } ///dfg 
const objDescuento = [];
objDescuento.push({
  name: 'JuanDC_es_Batman',
  dscto: 30,
});
objDescuento.push({
  name: 'pero_es_un_secreto',
  dscto: 25,
});
objDescuento.push({
  name: 'no_le_digas_a_nadie',
  dscto: 15,
});

function calculaPrecio(){
    const precio = Number(inputprecio.value);
    const descuento = (inputdescuento.value);
    const price = (precio)
    let discount;
    // const objDescuento = (descuento)
    const buscarArray = objDescuento.find((element)=>element.name == descuento )

    if(buscarArray){
        discount = buscarArray.dscto
        const Resultado = (price * (100 - discount)) / 100;
        p.innerText = 'El nuevo precio con descuento es S/' + Resultado;
    }else{
        p.innerText = 'No existe el cupón de descuento o ya expiró';
    }
   
    // if(objDescuento[descuento]){
    //     discount = objDescuento[descuento]
    //     const Resultado = (price * (100 - discount)) / 100;
    //     p.innerText = 'El nuevo precio con descuento es S/' + Resultado;
    // }else{
    //     p.innerText = 'No existe el cupón de descuento o ya expiró';
    // }
    
}

// const inputPrice = document.querySelector('#price');
// const inputDiscount = document.querySelector('#discount');
// const btn = document.querySelector('#calcular');
// const pResult = document.querySelector('#descuento_total');

// btn.addEventListener('click', calcularPrecioConDescuento);

// function calcularPrecioConDescuento() {
//   const price = Number(inputPrice.value);
//   const discount = Number(inputDiscount.value);

//   if (price <= 0 || discount < 0) {
//     pResult.innerText = 'CHANCLA por favor llena el formulario';
//     return;
//   }

//   if (discount > 100) {
//     pResult.innerText = 'Ajá, ya quisieras, no te vamos a dar plata, ¡PAGA!';
//     return;
//   }

//   const precioFinal = price - (price * discount / 100);
//   pResult.innerText = `Precio final: $${precioFinal}`;
// }

