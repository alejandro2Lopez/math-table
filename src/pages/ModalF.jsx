export function closeModal(modalID,setShowBackdrop) {
    var modal = document.getElementById(`${modalID}`);
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    var modalBackdrop = document.querySelector(".modal-backdrop");
    if (modalBackdrop) {
        modalBackdrop.remove();
    }
    modal.classList.remove("show");
    setShowBackdrop(false);
}

export function openModal(modalID,setShowBackdrop) {
    const modal = document.getElementById(`${modalID}`);
    if (modal) {
        // Restablece el modal antes de abrirlo
        modal.style.display = 'block';
        modal.style.opacity = 1;
        modal.style.display = 'block';
        modal.style.opacity = 1;
        modal.style.marginTop = `50px`; // Centra verticalmente
        modal.style.marginLeft = `-30px`; // Centra horizontalmente
        document.body.classList.add('modal-open');
        modal.click();
        setShowBackdrop(true);
    }

}