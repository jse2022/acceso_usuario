import "./styles.css";
let usuario: string = "jose";
let clave: string = "eureka";

let contador: number = 0;

let ingresoUsuario = prompt("Ingrese usuario: ");
let ingresoClave = prompt("Ingrese Clave: ");
if (ingresoUsuario === usuario && ingresoClave === clave) {
  alert("Acceso correcto");
} else {
  if (!(ingresoUsuario === usuario && ingresoClave === clave)) {
    while (contador < 3) {
      contador = contador + 1;
      let ingresoUsuario = prompt("Ingrese usuario: ");
      let ingresoClave = prompt("Ingrese Clave: ");
      alert("Vuelva a intentar");
    }
    alert("Acceso denegado");
  }
}
