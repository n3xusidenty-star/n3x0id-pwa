document.addEventListener('DOMContentLoaded', function() {
    // Variable de prueba: si el casco ya está registrado
    // Cambiar a true para simular casco registrado
    let cascoRegistrado = false;

    const tutorial = document.getElementById('tutorial');
    const infoCliente = document.getElementById('info-cliente');

    if(cascoRegistrado){
        // Mostrar info del cliente, ocultar tutorial
        tutorial.style.display = 'none';
        infoCliente.style.display = 'block';
    } else {
        // Mostrar tutorial, ocultar info del cliente
        tutorial.style.display = 'block';
        infoCliente.style.display = 'none';
    }

    // Eventos de botones (ejemplo mínimo)
    document.getElementById('ver-perfil').addEventListener('click', function() {
        alert('Ver perfil completo (simulación)');
    });

    document.getElementById('modo-emergencia').addEventListener('click', function() {
        alert('Modo emergencia activado (simulación)');
    });

    document.getElementById('actualizar-info').addEventListener('click', function() {
        alert('Actualizar información (simulación)');
    });
});