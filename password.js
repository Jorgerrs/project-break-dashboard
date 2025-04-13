console.log(document.getElementById('generarContrasena'))
document.getElementById('generarContrasena').addEventListener('click', () => {
    const longitud = parseInt(document.getElementById("longitud").value);
    if (longitud < 12 || longitud > 50) {
        alert("Introduce una longitud válida (entre 12 y 50).");
        return;
    }
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()-_="
    const todos = mayusculas + minusculas + numeros + simbolos;

    let contraseña = "";
    contraseña += mayusculas[Math.floor(Math.random() * mayusculas.length)];
    contraseña += minusculas[Math.floor(Math.random() * minusculas.length)];
    contraseña += numeros[Math.floor(Math.random() * numeros.length)];
    contraseña += simbolos[Math.floor(Math.random() * simbolos.length)];

    for (let i = contraseña.length; i < longitud; i++) {
        contraseña += todos[Math.floor(Math.random() * todos.length)];
    }
    console.log(contraseña)
    document.getElementById("passwordResult").innerHTML = contraseña;
}); 
