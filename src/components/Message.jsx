import Swal from 'sweetalert2';
export function message(message, icon, time) {
    Swal.fire({
        position: 'top-center',
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: time
    });
}