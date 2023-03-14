var varCajaDeposito = document.getElementById("cajaDeposito");
var varBloquesPredefinidos = document.getElementById("bloquePredefinido");
var iconosArrastrables = document.getElementsByClassName("iconoArrastrable");

varCajaDeposito.addEventListener("dragover", (eventoDeArrastre) => arrastrar(eventoDeArrastre));
varCajaDeposito.addEventListener("drop", (eventoDeArrastre) => soltar(eventoDeArrastre));

varBloquesPredefinidos.addEventListener("dragover", (eventoDeArrastre) => arrastrar(eventoDeArrastre));
varBloquesPredefinidos.addEventListener("drop", (eventoDeArrastre) => soltar1(eventoDeArrastre));

for(var i=0; i<iconosArrastrables.length; i++){
  iconosArrastrables[i].setAttribute("draggable","true");
  iconosArrastrables[i].addEventListener("dragstart", (eventoDeArrastre) => iniciArarrastre(eventoDeArrastre));
}

function iniciArarrastre(eventoDeArrastre){
  eventoDeArrastre.dataTransfer.setData("idIconoArrastrable", eventoDeArrastre.target.id);
  console.log(eventoDeArrastre.target.id);
}

function arrastrar(eventoDeArrastre){
  eventoDeArrastre.preventDefault();
}

function soltar(eventoDeArrastre){
  eventoDeArrastre.preventDefault();
  var data = eventoDeArrastre.dataTransfer.getData("idIconoArrastrable");
  varCajaDeposito.appendChild(document.getElementById(data));
  if (data=='cdd'){
    document.getElementById('documentacion').style.display = 'block'
  };
  if (data=='rdm'){
    document.getElementById('materiales').style.display = 'block'
  };
  if (data=='iyeds'){
    document.getElementById('inspeccion').style.display = 'block'
  };
  if (data=='if'){
    document.getElementById('iFinal').style.display = 'block'
  };
  if (data=='rfQA'){
    document.getElementById('revQA').style.display = 'block'
  };
}

function soltar1(eventoDeArrastre){
  eventoDeArrastre.preventDefault();
  var data = eventoDeArrastre.dataTransfer.getData("idIconoArrastrable");
  varBloquesPredefinidos.appendChild(document.getElementById(data));
  if (data=='cdd'){
    document.getElementById('documentacion').style.display = 'none'
  };
  if (data=='rdm'){
    document.getElementById('materiales').style.display = 'none'
  };
  if (data=='iyeds'){
    document.getElementById('inspeccion').style.display = 'none'
  };
  if (data=='if'){
    document.getElementById('iFinal').style.display = 'none'
  };
  if (data=='rfQA'){
    document.getElementById('revQA').style.display = 'none'
  };
}

function nivelesDeCalidad(){
  var checkBoxA = document.getElementById('calidadA')
  var checkBoxB = document.getElementById('calidadB')
  var checkBoxC = document.getElementById('calidadC')

  checkBoxA.onclick = function(){
  if (checkBoxA.checked != false){
    checkBoxB.checked = null
    checkBoxC.checked = null
  }}
  checkBoxB.onclick = function(){
  if (checkBoxB.checked != false){
    checkBoxA.checked = null
    checkBoxC.checked = null
  }}
  checkBoxC.onclick = function(){
  if (checkBoxC.checked != false){
    checkBoxA.checked = null
    checkBoxB.checked = null
  }}  
}