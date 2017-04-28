var inputAll=document.getElementsByTagName("input");
var enviar=document.getElementById("sign-in");
enviar.addEventListener("click",function(){
  if (!(inputAll[6].value==inputAll[7].value)) {
  alert("las no contraseñas coenciden");
  }

});



/*
if(!prueba.test(micel.value)){
  alert("ingrese solo numeros");
}*/
