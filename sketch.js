//2016 07 20 miercoles
// Codigo para p5* con una elipse que siga al mouse.
//camelCase cuando se escribe con minuscula la primera palabra y la primera letra de la segunda se hace con mayuscula
//variables
/*
las variables de declaran al declararla hace que el computador sepa que existe. 
Solo depues de declarar la variable se puede asigna un valo a esta
existen variables locales y globales. las globales viven fuera de una funcion y las locales dentro de una funcion. 
*/
var diametro = 20;
var anchoBorde = 1;
// declaro la cuncion;
function nombreFuncion(){
}
function setup() {
  //Crea lienzo
  createCanvas(400, 300);
  //setea color de fondo del lienzo
  //(rojo, verde, azul)
  //background(255, 204, 0);
}
// la funcion draw() se ejecuta despues de setup y se ejecuta 60 veces por segundo
function draw() {
  background(255, 204, 0); // al incluirla dibuja el fondo nuevamente por lo que no se ve la estela 
  //definir tamaño de borde
  estilo1();
  //elipse(posx, posy, widthm height) dibuja una elipse
  //Las medidas de las elipses son en pixeles
  ellipse(mouseX, mouseY, diametro, diametro);
  //diametro = diametro +1; // esto hace que vaya creciendo el diametro. 
}

 function estilo1(){
  strokeWeight(anchoBorde);
  // color de borde
  stroke(210, 0,100);
  //fill(red, green, blue)
  //fill() elije el color del relleno
  fill(255,0, 0.25);
} 
