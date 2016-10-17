//SUMA
function esSuma(a, b){
	var resultado = a + b;
	return resultado;
}

//PROMEDIO
function esPromedio(a,b,c){
	var suma = a + b + c;
	var promedio = suma/3;
	return promedio;
}

//AREA
function esArea(base, altura){
	var area = (base*altura)/2;
	return area;
}

//SUELDO
function esSueldo(horas, pago, semanal){
	var suma = horas * pago;
	var semanal = suma*7;
	return semanal;
}

//PAR O IMPAR
function par(numero){
	 	if (numero % 2 ===0){
	 		alert("es par");
	 	}else{
	 		alert(	"es impar");
	 	}
}

//MENOR QUE
function menor(primero,segundo,tercero){
	var numero = Math.min(primero,segundo,tercero);
	return numero;
}


//MAYUSCULA MINUSCULA O AMBAS
function iguales(texto) {
	var resultado = "";
	if (texto == texto.toUpperCase()){ //comprueba si son mayusculas
		resultado += "solo esta con mayusculas";
	}else if (texto == texto.toLowerCase()){ //comprueba sin son minusculas
		resultado += "solo esta con minusculas";
	}else{ 
		resultado += "tiene mayusculas y minusculas";
	}
	return resultado;
}

// MULTIPLO
function multiplos(numero){
	var multiple = numero;
	var total = "";
	for (var i = 1; i <= 10; i++){//recorre los numeros
		var valor = multiple * i;
		total += " " + valor.toString();//cadena mas espacio
	}
	return total;
}

