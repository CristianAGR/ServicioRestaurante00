var costoT = 0;
var cantidadP = 0;
var cantidadB = 0;
var i =0,j=0;
while (i<5){
    var platillos = "Nachos";
switch(platillos){
    case "Nachos":
        console.log("Los Nachos cuestan $30");
        costoT += 30;
        cantidadP += 1;
        break;
    case "Pizza":
        console.log("La pizza cuesta $120");
        costoT += 120;
        cantidadP += 1;
        break;
    case "Tacos":
        console.log("Los tacos cuestan $10");
        costoT += 10;
        cantidadP += 1;
        break;
    default:
        alert("Seleccionaste una opcion incorrecta o que no se encuentra en el menu");
}
i++;
}

while (j<5){
    var bebidas = "cervezas";
switch(bebidas){
    case "Agua natural":
        console.log("El agua natural cuesta $15");
        costoT += 15;
        cantidadB += 1;
        break;
    case "Sodas":
        console.log("Las sodas cuestan $30");
        costoT += 30;
        cantidadB += 1;
        break;
    case "cervezas":
        console.log("Las cervezas cuestan $45");
        costoT += 45;
        cantidadB += 1;
        break;
    default:
        alert("Seleccionaste una opcion incorrecta o que no se encuentra en el menu");
}
j++;
}
console.log("La cantidad de platillos que ordeno son: " + cantidadP);
console.log("La cantidad de bebidas que ordeno son: " + cantidadB);
console.log("El costo total de su compra es de: $" + costoT);
//debe imprimir cuantos elementos selecciono y el total de compra