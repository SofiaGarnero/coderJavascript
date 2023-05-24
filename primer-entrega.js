let nombre = prompt('Ingresa tu nombre: ');


while (nombre == "") {
    alert('Nombre invalido ');
    nombre = prompt('Ingresa tu nombre: ');
}

alert('Bienvend@ ' + nombre);
let mensaje;
let total = 0;
let salgo = false;


do {
    mensaje = parseInt(prompt('¿Desea contratar un servicio o comprar un producto?\n1-Servicio  \n2-Producto'));

    if (mensaje === 1 || mensaje === 2) {
        salgo = false;
    }else{
        salgo = true
    }
    console.log(salgo,mensaje);

} while (salgo == true)

while (mensaje == 1) {
    let mensajeServicio = prompt('Desea obtener mas información sobre:\n1- Maquillaje de novias \n2-Producción de moda \n3-Maquillaje social \n4-Automaquillaje');
    switch (mensajeServicio) {
        case '1':
            alert('Servicio profesional para un día tan especial.El servicio para la novia donde diseñamos un maquillaje según la personalidad y el estilo de ella, es con productos profesionales y de larga duración.');
            break;
        case '2':
            alert('La técnica y el equipo son claves al momento de trabajar con la imágen. Este maquillaje se adapta a las últimas tendencias en fotografía moda y video, con técnicas de vanguardia y productos aptos 4K.');
            break;
        case '3':
            alert('Si cumplís 15, egresás o tenés un evento donde querés mostrar lo más lindo de vos. El servicio de maquillaje es con productos profesionales y de larga duración para que estés divina todo el evento.');
            break;
        case '4':
            alert('Aprende a maquillarte de una forma dinámica para obtener disferentes resultados a nivel prodesional. Cuenta con un maquillaje de día y uno de noche.  ');
            break;
        default:
            alert('no corresponde a ninguna opción');
            break;
    }

    mensaje = (prompt('Para mas información contactese con el siguiente número CEL:351-6203587. \n¿Desea visualizar otro servicio o producto ? \n1-Servicio  \n2-Producto \n3-salir '));
}


while (mensaje == 2) {
    let producto = parseInt(prompt('productos en Stock:\n1-Kit de skin care \n2-Sombras \n3-Labiales \n4- Rubores'));
    switch (producto) {
        case 1:
            alert('Agregaste un kit de Skin Care de $3500 a tu carrito.( incluye: mascarilla, crema de noche ,crema de día y jabón de limpieza) ');
            incrementarTotal(3500);
            break;
        case 2:
            alert('Agregaste una paleta de sombras de $2500 a tu carrito. (incluye 8 sombras)');
            incrementarTotal(2500);
            break;
        case 3:
            alert('Agregaste Kit de 3 labiales de $1500 a tu carrito (incluye labial color nude, rojo y rosa)');
            incrementarTotal(1500);
            break;
        case 4:
            alert('Agregaste una paleta de dos rubores de $2100 a tu carrito');
            incrementarTotal(2100);
            break;
        default:
            alert('No corresponde a ninguna opción!');
            break;
    }

    mensaje = parseInt(prompt('Desea comprar otro producto? \n2-SI \n5-Para Salir'));


}

alert('El monto total de su compra es:' + total);

function incrementarTotal(precio) {
    total = total + precio;
    alert('Subtotal hasta el momento $' + total);
}