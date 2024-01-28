
const postFetch = async ( postData) => {
    try {
        let response = await fetch('https://script.google.com/macros/s/AKfycbydNJfeiM9bGnm_G4nReFHzAlNR2H4SMazEDFXAgmtI58lRJ6J-Ef-ZNKMGeGtRrirq/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            mode: 'no-cors',
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};

// Llama a la función postFetch con los parámetros deseados

const postData = { game: "MatTable" };

// Invoca la función postFetch y maneja la promesa resultante
postFetch( postData)
    .then(response => {
        // Maneja la respuesta aquí
        console.log('Respuesta:', response);
    })
    .catch(error => {
        // Maneja el error aquí
        console.error('Error:', error);
    });