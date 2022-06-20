


//------------------------------------------------------------------------------------------------------------------

//SIMULADOR PARA PROYECTO ASAWI-SANDWICHS DE CUOTAS

console.log("<----Bienvenidos a Asawi---->")
let precio = 1000;
let nombre_usuario = prompt("Ingrese su nombre");
let direccion = prompt("Ingrese su direccion");
let cantidad = parseInt(prompt("Ingrese cantidad de unidades"));
let total = cantidad * precio;
let cantidadCuotas = parseInt(prompt("Ahora ingrese en cuantas cuotas"));
let totalConInteres = 0;
let valorDeCuota = 0;

function calcularValores(){
    if (cantidadCuotas == 0){
       
        totalConInteres = total
        valorDeCuota = 0
    } 
    else if (cantidadCuotas == 1){
       
        totalConInteres = total
        valorDeCuota = total
    }    
    else if (cantidadCuotas == 2){
      
        totalConInteres = total * 1.25
        valorDeCuota = totalConInteres / cantidadCuotas
    }
    else if (cantidadCuotas == 3) {

        totalConInteres = total * 1.50
        valorDeCuota = totalConInteres / cantidadCuotas
    }
    else {
        totalConInteres = 0 
        valorDeCuota = 0 
    }
}
calcularValores();
console.log('El sub total es:', total);
console.log('Total con interes:', totalConInteres);
console.log('Cantidad de Cuotas:', cantidadCuotas);
console.log('Monto por Cuota:', valorDeCuota);









