var funcao = (function(){
	'use strict';
	var $  = document.querySelector.bind(document);
	/* 
		Algoritmo de criptografia, usando um texto claro, a partir de um chave k.
	*/
	// Fução que gera a chave de 1 a 25 do alfabeto.
	   var c = t=>{
		 let texto_claro = t.value;
		 let key = $("#key").value;
		 let texto_cifrado = "";
		 for(let i = 0; i < texto_claro.length; i++){
			texto_cifrado += String.fromCharCode((texto_claro.charCodeAt(i)+key % 26));
		 }
		 	$("#cl").innerHTML = texto_claro;
            $("#ci").innerHTML = texto_cifrado;
            $("#tcl").style.visibility = 'visible';
            $("#tcf").style.visibility = 'visible';
	   };
	   var d = ()=>{
	   	 let texto_cifrado = $("#ci").textContent;
		 let key = $("#chave").value;
		 let texto_claro = "";
		 for(let i = 0; i < texto_cifrado.length; i++){
			texto_claro+= String.fromCharCode((texto_cifrado.charCodeAt(i)-key % 26));
		 }
		 $("#de").innerHTML = texto_claro;
		 $("#tcd").style.visibility = 'visible';
	   };
	   var limpar = function(){
	 		$("#de").innerHTML = "";
		 	$("#tcd").style.visibility = 'hidden';
	 		$("#key").value = "";
	 		$("#textoC").value = "";
	 		$("#cl").innerHTML = "";
	 		$("#tcl").style.visibility = 'hidden';
	 		$("#tcf").style.visibility = 'hidden';
	 		$("#ci").innerHTML = "";
	 	};
		 return {
			 c: c,
			 d: d,
			 limpar: limpar
		 }
})(document);