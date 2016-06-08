/* Inserta tu código aqui */
var puntos=0;
var intentos=5;
$(document).ready(function(){
	// var cont=0;
	var nombreCorrecto="";

	$('#sel1').on('change',function(){
		var nombre=0;
		var i=0
		var cajaSelected = $(this);
		var resultado = Math.floor((Math.random() * 30) + 1);
		var valor = $(this).val();

			cajaSelected.addClass('form-control');

				if (valor == 1) {	
					$("#imagen").attr('src','fotos/peru/'+peru[resultado].image)
					nombreCorrecto = (peru[resultado].name).toUpperCase()
				}else if (valor==2) {
					$("#imagen").attr('src','fotos/mexico/'+mexico[resultado].image)
					nombreCorrecto = (mexico[resultado].name).toUpperCase()
				}

			// alert(nombreCorrecto)

	})
	$('#boton').on('click', function(event){

		event.preventDefault() // permite no recargar

		var selec= ($('#nombre').val()).toUpperCase()
		if (nombreCorrecto==selec) {
			alert('correcto')
			puntos+=5;
			$("span").text(puntos)
			var resultado = Math.floor((Math.random() * 40) + 1);
			var pais=$('#sel1').val()
				if (pais == 1) {
					$("#imagen").attr('src','fotos/peru/'+peru[resultado].image)
					nombreCorrecto = (peru[resultado].name).toUpperCase()

				}else if (pais == 2) {
					$("#imagen").attr('src','fotos/mexico/'+mexico[resultado].image)
					nombreCorrecto = (mexico[resultado].name).toUpperCase()
				}
		
		// alert(nombreCorrecto)
		// cont+=1;
		// $("span").text(cont);
		}else{
			puntos-=1;
			alert('incorrecto, vuelva a intentar')}
			$('#nombre').val("")
			$('#nombre').focus()
			$("span").text(puntos)
			// oportunidades(intentos);
			intentos-=1;
			if (intentos==0) {
				alert('PEEEERDITE...!!!')
					$('#boton').click(function() {
	            // Recargo la página
	            	location.reload();
	       			 });
			}

	
	})
})




// function jueguito(nombreCorrecto, selec){
	
// }

// function oportunidades(numero){
// 	if (numero=0){
// 		alert("No tienes más oportunidades")
// 	// 	setTimeout()(function{  cuando cambia imagen },text, cont=5),2000)
// 	}
// }




// function aleatorio(){
// 	var max= 30;
// 	var min=1;
// 	var resultado = Math.floor((Math.random() * max - min +1) + min);
// 	$("#imagen").attr('src','fotos/peru/'+peru[resultado].image)
// 	nombreCorrecto = peru[resultado].name
// 	alert(nombreCorrecto)
// 	cont+=1;
// 	$("span").text(cont);
// }
