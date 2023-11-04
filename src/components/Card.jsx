import '../assets/game.css'
export function generateInputElements(pregunta, answerUser, size, blocknum) {
    return pregunta.map((number, index) => {
        if (size === 1) {
            return (<div className="row gy-1" key={number}>
                <div className="col-1">
                    <div className="d-grid gap-1">
                        <input
                            id={index}
                            type="number"
                            className="mi-input"
                            placeholder={number}
                            onChange={(e) => { answerUser[index] = e.target.value }}
                            readOnly={number !== '0' || blocknum === true} // Aquí se define el atributo readOnly según la condición
                        />
                    </div>
                </div>
            </div>)
        } else if (size === 3) {
            if (index === 0 || index === 3) {
                return (<><div className="col-1"  >
                    <div className="d-grid gap-1 ">
                        <input type="number" className="mi-input" placeholder={number} onChange={(e) => { answerUser[index] = e.target.value }} readOnly={number !== '0' || blocknum === true}></input>


                    </div>

                </div></>)


            } if (index === 1 || index === 4) {
                return (<> <div className="col-1">
                    <div className="d-grid gap-1 ">
                        <input type="number" className="mi-input" placeholder={number} onChange={(e) => { answerUser[index] = e.target.value }} readOnly={number !== '0' || blocknum === true} ></input>
                    </div>
                </div></>)


            } if (index === 2 || index === 5) {
                return (<> <div className="col-1">
                    <div className="d-grid gap-1 ">
                        <input type="number" className="mi-input" placeholder={number} onChange={(e) => { answerUser[index] = e.target.value }} readOnly={number !== '0' || blocknum === true}></input>
                    </div>
                </div>
                    <div></div></>)


            }
        }
        else if (size === '2') {
            if (index === 0 || index === 2) {
                return (<><div className="col-1">
                    <div className="d-grid gap-1 ">
                        <input type="number" className="mi-input" placeholder={number} onChange={(e) => { answerUser[index] = e.target.value }} readOnly={number !== '0' || blocknum === true}></input>


                    </div>

                </div></>)


            } if (index === 1 || index === 3) {
                return (<> <div className="col-1">
                    <div className="d-grid gap-1 ">
                        <input type="number" className="mi-input" placeholder={number} onChange={(e) => { answerUser[index] = e.target.value }} readOnly={number !== '0' || blocknum === true}></input>
                    </div>
                </div>
                    <div></div></>)


            }
        }

        return null; // Devolver null en caso de que size no sea '1', '2', ni '3'.
    });
}
