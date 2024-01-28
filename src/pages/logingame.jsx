import React, { useContext, useState } from "react";
import '../assets/logingame.css'
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";
import { message } from "../components/Message";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
const LoginGame = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const [team] = useState([]);
    const addTeam = () => {
        const input = document.getElementById("login")
        if (input.value.length === 0) {
            message(`Tienes que agregar un nombre al equipo`, 'error', 3000);
        } else {
            team.push({ name: input.value, points: 0 })
            message(`El equipo ${input.value} se ha agregado de manera correcta.`, 'success', 3000);
            input.value = "";
        }

    }
    const goToTheGame = () => {
        if (team.length > 0) {
            navigate('/Game')
            dispatch({ type: authTypes.login, teams: team })
        } else {
            message('Debes agregar al menos un jugador.', 'question', 1500);
        }


    }
    const goToTheMathLab = () => {
        window.location.href = 'https://matlab-juegosu.onrender.com/';
        dispatch({ type: authTypes.logout })

    }
    return (

        <body className='block-scroll body'>

            <div className="py-8 h-200 wrapper fadeInDown ">
                <div className="row justify-content-center align-items-center ">
                    <div className="d-flex justify-content-start align-items-start">
                        <button id="enviar" className='btn' onClick={goToTheMathLab} style={{ color: "white" }}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft } size="2xl" color='White' />
                        </button >

                    </div>
                    <div className="row justify-content-center align-items-center  " id="formContent" >

                        <h2 className="active"> Math Tables </h2>

                        {/* Icon */}


                        {/* Login Form */}
                        <form>
                            <input
                                type="text"
                                id="login"
                                className="fadeIn second"
                                name="login"
                                placeholder="Agregar equipo"
                            />

                            <input type="button" className="fadeIn fourth button-yellow" onClick={addTeam} defaultValue="      Agregar     " />
                            <input type="button" className="fadeIn fourth button-blue" onClick={goToTheGame} defaultValue="        Jugar        " />
                            <input type="button" className="fadeIn fourth button-orange" data-bs-toggle="modal" data-bs-target="#exampleModal" defaultValue="Instrucciones" />
                            <div>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
            <div className="modal fade" role="dialog" id="exampleModal" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">

                        <div className="modal-header d-block">
                            <div className="text-center" style={{ textAlign: "center !important" }}>
                                <h2 className="modal-title text-center" id="titleVerification">
                                    Instrucciones
                                </h2>
                            </div>
                        </div>

                        <div className="modal-body">
                            <p>
                                🤓&nbsp;
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>
                                        Instrucciones previas al inicio del juego:
                                    </span>
                                </strong>
                                <br />
                                <br />
                                <span style={{ color: "rgb(55, 65, 81)" }}>Es necesario que</span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}> al menos</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}> un </span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>jugador</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}> haya </span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>ingresado antes</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    {" "}
                                    de comenzar el juego.
                                </span>
                                <br />
                                <br />

                                📝&nbsp;
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>
                                        Reglas del juego:&nbsp;
                                    </span>
                                </strong>
                                <br />
                                <br />
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    El juego se compone de{" "}
                                </span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>tres niveles</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>:</span>
                                <br />
                                <br />

                                🟢&nbsp;
                                <strong>
                                    <span
                                        style={{
                                            color: "rgb(55, 65, 81)",
                                            backgroundColor: "rgba(255, 255, 255, 0.2)"
                                        }}
                                    >
                                        Nivel fácil:
                                    </span>
                                </strong>
                                <span
                                    style={{
                                        color: "rgb(55, 65, 81)",
                                        backgroundColor: "rgba(255, 255, 255, 0.2)"
                                    }}
                                >
                                    &nbsp;
                                </span>
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    Tablas de multiplicar del 1 al 3.
                                </span>
                                <br />
                                <strong>
                                    🔵&nbsp;
                                    <span style={{ color: "rgb(55, 65, 81)" }}>Nivel medio:</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    {" "}
                                    Tablas de multiplicar del 4 al 6.
                                </span>
                                <br />
                                <strong>
                                    🟠&nbsp;
                                    <span style={{ color: "rgb(55, 65, 81)" }}>Nivel experto:</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    {" "}
                                    Tablas de multiplicar del 7 al 10.
                                </span>
                                <br />
                                <br />
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    Cada nivel otorga una puntuación diferente por acierto:
                                </span>
                                <br />
                                <br />

                                🟢&nbsp;
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>Nivel fácil:</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    {" "}
                                    3 puntos por acierto.
                                </span>
                                <br />
                                <strong>
                                    🔵&nbsp;
                                    <span style={{ color: "rgb(55, 65, 81)" }}>Nivel medio:</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    {" "}
                                    5 puntos por acierto.
                                </span>
                                <br />
                                <strong>
                                    🟠&nbsp;
                                    <span style={{ color: "rgb(55, 65, 81)" }}>Nivel experto:</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    {" "}
                                    7 puntos por acierto.&nbsp;
                                </span>
                                <br />
                                <br />
                                <span style={{ color: "rgb(55, 65, 81)" }}>El juego </span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>incluye</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}> un </span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>comodín</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>
                                    . Si los jugadores deciden{" "}
                                </span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>usar</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}> el </span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>comodín</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>, el equipo </span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>perderá</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}> </span>
                                <strong>
                                    <span style={{ color: "rgb(55, 65, 81)" }}>dos puntos</span>
                                </strong>
                                <span style={{ color: "rgb(55, 65, 81)" }}>.&nbsp;</span>☹️
                                <br />
                                <br />


                                🏆 Ganará quien tenga más aciertos.&nbsp;
                                <br />


                            </p>
                        </div>
                        <div className="modal-footer">

                            <button
                                className="btn btn-primary"
                                type="button"
                                data-bs-dismiss="modal"
                                style={{
                                    background: "rgb(253,114,13)",
                                    borderColor: "rgb(255,107,24)"
                                }}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </body>
    );

};

export default LoginGame;