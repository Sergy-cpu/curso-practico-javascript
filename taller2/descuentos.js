/* const precioOriginal = 100;
const descuento = 15;
 */
function callcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDecuento = 100 - descuento;
    const precioConDecuento = (precio * porcentajePrecioConDecuento) /100;

    return precioConDecuento;

}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;



    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = callcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $"+ precioConDescuento;
}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDecuento,
    precioConDecuento,

}); */