
    function filtrarVehiculos() {
        var filtro = document.getElementById('filtro-vehiculo').value;
        var vehiculos = document.querySelectorAll('.vehiculo-item');

        vehiculos.forEach(function(vehiculo) {
            if (filtro === 'todos' || vehiculo.classList.contains(filtro)) {
                vehiculo.style.display = 'block';
            } else {
                vehiculo.style.display = 'none';
            }
        });
    }

    document.getElementById('filtro-vehiculo').addEventListener('change', filtrarVehiculos);
    filtrarVehiculos();
