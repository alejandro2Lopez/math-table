import axios from 'axios';

export const getFetch = async (path) => {
    let response = await axios.get(`https://script.google.com/macros/s/AKfycbw_EYrnSe_-1JJjhJzIyjMPk4IjdfeC6mlCxg__YzD2hQY6ligbdNR4yxCZrT91DgnQ0A/exec?${path}`, {
        crossDomain: true, // No es necesario en Axios, pero lo mantenemos para referencia
        responseType: "json",
        mode: "no-cors" // Establece el tipo de respuesta esperada (JSONP)
    })
    return await response;

}

