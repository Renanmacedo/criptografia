/*
    Classe que irá prover animações na encriptação e decriptação
    Ainda está em desenvolvimento.
*/
var animate = (function($,global,window){
         window.setTimeout(()=>{
            $("#cif").click(function(){
                $("#modal").modal();
                $("#saida").text("Chave : ");
            });
         },5000);

})(jQuery,document,window);