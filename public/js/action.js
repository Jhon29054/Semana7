document.addEventListener('DOMContentLoaded', function() {
    const botonesEliminar = document.querySelectorAll('.btnEliminar');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', function(event) {
            const clienteId = event.target.dataset.id;

            Swal.fire({
                title: '¿Estás seguro?',
                text: '¡No podrás revertir esto!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: '¡Sí, eliminarlo!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = `/delete/${clienteId}`;
                }
            });
        });
    });
});