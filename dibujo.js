var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{

  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#3D87B4";
  var mag = "#8571C6";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    yf = espacio * (l + 1);
    xi = espacio * l;
    dibujarLinea(colorcito, 0, yi, xf, 500);
    dibujarLinea(colorcito, xi, 0, 500, yf);
    console.log("linea " + l);
  }

  for(l = 0; l < lineas; l++)
  {
    xi = 500 - (espacio * l);
    xf = espacio * (l + 1);
    yi = 500 - (espacio * l);
    yf = espacio * (l + 1);
    dibujarLinea(mag, xi, 0, 0, yf);
    dibujarLinea(mag, 500, xf, yi, 500);
  }

  dibujarLinea(colorcito, 1,1,1,499);
  dibujarLinea(colorcito, 1,499,499,499);
  dibujarLinea(colorcito, 499, 499, 499, 1);
  dibujarLinea(colorcito, 499, 1, 1, 1);
}
