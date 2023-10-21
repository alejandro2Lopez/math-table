import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faMap } from '@fortawesome/free-regular-svg-icons';
import { getFetch} from "../components/FetchMethods";
import { generateInputElements } from '../components/Card';
import { openModal, closeModal } from "../components/ModalF";
import { message } from "../components/Message";
import '../assets/game.css'
import ea from "../assets/C2.png"
import d from "../assets/m1.png"
import m from "../assets/d.png"
import tablaM from "../assets/Tablas_de_multiplicar.png"
import { Countdown } from "../components/Countdown";
const Game = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const [level, setLevel] = useState("");
    const [buttonColor, setButtonColor] = useState("");
    const [pregunta, setPregunta] = useState(['1', '2', '3']);
    const [refresh, setRefresh] = useState(true);
    const [size, setSize] = useState();
    const [answer, setAnswer] = useState([]);
    const [csSize, setCsSize] = useState('');
    const [cBSize, setCBSize] = useState('');
    const [blocknum, setBlocknum] = useState(false);
    const [answerUser, setAnswerUser] = useState([]);
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [team, setTeams] = useState([]);
    const [key, setKey] = useState(0);
    const [getUsers, setUsers] = useState(true);
    const [nextplayer, setNextPlayer] = useState(0)
    const [nextPl, setNextPl] = useState(0)
    const { log } = useContext(AuthContext);
    const [levelPoint, setLevelPoint] = useState(0);
    const [colors] = useState(['red', 'green', 'black', 'yellow', 'pink', 'grey']);


    const goToTheLogin = () => {
        navigate('/loginGame')
        dispatch({ type: authTypes.logout })

    }
    const getListUser = () => {
        setTeams(log.teams);
    }
    const setTeam = () => {
        setNextPlayer(1);

    }
    const nextPL = () => {
        setNextPl(nextPl + 1);
    }
    const userN = () => {
        setNextPlayer(nextplayer + 1);
    }
    const nextPlayer = () => {
        if (nextPl === team.length - 1) {
            setNextPl(0);
        }


        if (nextplayer >= team.length) {
            setTeam();
            message(`Sigue el equipo ${team[0].name}`, "question", 3000);

        }
        else {
            nextPL();
            userN();
            message(`Sigue el equipo ${team[nextplayer].name}`, "question", 3000);
        }

    }
    useEffect(() => {
        if (refresh) {

            setRefresh(false);
            if (getUsers) {
                getListUser();
                setUsers(false);
                message(`Sigue el equipo ${log.teams[0].name}`, "question", 3000);

                setTeam();
            }
            if (blocknum) {
                setTimeout(() => {
                    closeModal("exampleModalToggle2", setShowBackdrop);
                    setBlocknum(false)
                    setShowBackdrop(true);
                }, 30000);
            }
        }



    }, [refresh, pregunta, closeModal, nextplayer])


    const levelOne = generateInputElements(pregunta, answerUser, size, blocknum);
    function areArraysEqual(array1, array2) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }

        return true;
    }
    const ListOfTeams = team.map((team, key) => {
        return (<div class="col-md-auto nombreEquipo">
            <div class="d-grid gap-2">
                <button class="btn " style={{ backgroundColor: colors[key], borderColor: colors[key] }} disabled>{team.name}: {team.points}</button>
            </div>
        </div>)
    })
    const initGame = (res, colorButton, level) => {
        if (res.data.finish) {
            const pregunta = res.data.incremento.Pregunta;
            const respuesta = res.data.incremento.Respuesta;
            setAnswer(respuesta.split(","));
            setPregunta(pregunta.split(","));
            setAnswerUser(pregunta.split(","));
            setSize(res.data.incremento.Tamanio);
            setCsSize(`s-${res.data.incremento.Tamanio}`);
            setCBSize(`b-${res.data.incremento.Tamanio}`);
            openModal('exampleModal', setShowBackdrop);
            setRefresh(true);
            setLevel(level);
            setButtonColor(colorButton);

        } else {
            message('Ya has completado el nivel', "success", 1500);
        }


    }
    const levelM = () => {
        getFetch(`game/2`).then((res) => {
            initGame(res, 'fadeIn fourth button-blue', m);
            setLevelPoint(2);
        });


    }
    const levelExp = () => {
       getFetch(`game/3`).then((res) => {
            initGame(res, "fadeIn fourth button-orange", d);
            setLevelPoint(3);

        });


    }
    const levelEa = () => {
        getFetch(`game/1`).then((res) => {
            initGame(res, "fadeIn fourth button-yellow", ea);
            setLevelPoint(1);
        });


    }
    const clearArray = () => {
        setPregunta([]);
        setAnswer([]);
        setSize([]);
        setAnswerUser([]);
        setSize(null);
        setBlocknum(false);
    };



    const getPoint = (number) => {
        setTeams((prevTeams) => {
            return prevTeams.map((team, index) => {
                if (index === nextPl) {
                    return { ...team, points: team.points + number };
                }
                return team;
            });
        });
    };

    const getlostPoint = () => {
        setTeams((prevTeams) => {
            return prevTeams.map((team, index) => {
                if (index === nextPl) {
                    return { ...team, points: team.points - 2 };
                }
                return team;
            });
        });
    };
    const check = () => {
        const isCorrect = areArraysEqual(answer, answerUser);
        if (isCorrect) {
            message('Lo has hecho excelente', "success", 1500);

            setRefresh(true);
            clearArray();
            closeModal("exampleModal", setShowBackdrop);
            setTimeout(() => {
                nextPlayer();
                if (levelPoint == 1) {
                    getPoint(3);
                } else if (levelPoint == 2) {
                    getPoint(5);
                } else if (levelPoint == 3) {
                    getPoint(7);
                }
            }, 1500);


        } else {
            message('Casi lo logras, sigue prácticando.', "'error'", 1500);
            setTimeout(() => {
                nextPlayer();
            }, 1500);


        }
    }
    const setBlockFalse = () => {
        setBlocknum(true);
    }
    const openHelp = () => {
        setBlockFalse();
        setRefresh(true);
        setKey(key + 1);
        setShowBackdrop(false);
        message('Pierdes 2 puntos', 'question', 1500);

        setTimeout(() => {
            getlostPoint();
            openModal('exampleModalToggle2', setShowBackdrop);
        }, 1200);
    }
    return (
        <>
            <body className='block-scroll'>

                <div class="container p">

                    <div class="row justify-content-center align-items-center ">
                        <div className="row gy-1" style={{ paddingTop: '225px', position: 'absolute', paddingLeft: '225px' }} >

                            {ListOfTeams}
                        </div>
                    </div>

                    {showBackdrop && (
                        <div className="modal-custom-backdrop" /> // Fondo oscuro personalizado
                    )}
                    <div className="py-8 h-200 wrapper fadeInDown ">
                        <div className="row justify-content-center align-items-center ">
                            <div className="row justify-content-center align-items-center  " id="formContent" >
                                <div className="d-flex justify-content-end align-items-end">
                                    <button id="enviar" className='btn' onClick={goToTheLogin} style={{ color: "black" }}>
                                        <FontAwesomeIcon icon={faXmarkCircle} size="2xl" color='Black' />
                                    </button >

                                </div>
                                {/* Tabs Titles */}

                                <h2 className="active"> Math Tables </h2>
                                {/* Icon */}
                              
                                {/* Login Form */}
                                <form>
                                    <h3>Turno del equipo: {log.teams[(nextPl == null) ? 0 : nextPl].name}</h3>
                                    <hr></hr>
                                    <input type="button" className="fadeIn fourth button-yellow" onClick={levelEa} defaultValue="   Nivel Fácil   " />
                                    <input type="button" className="fadeIn fourth button-blue" onClick={levelM} defaultValue="  Nivel Medio  " />
                                    <input type="button" className="fadeIn fourth button-orange" onClick={levelExp} defaultValue="Nivel Experto" />
                                    <div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered ">
                        <div class="modal-content modalcolor">

                            <div class="modal-body">
                                <div className="row justify-content-center align-items-center">
                                    <img
                                        src={level}
                                        className="img-fluid"
                                        alt="Descripción de la imagen"
                                        style={{ width: '300px', height: '500px' }}
                                    />
                                </div>
                                <div class="container justify-content-center align-items-center">
                                    <div class={`row justify-content-center align-items-center ${csSize} `}>
                                        <div class="row gy-1  gx-5">
                                            {levelOne}
                                        </div>
                                    </div>

                                </div>
                                <div class="position-absolute top-0 end-0"> <button id="enviar" className='btn' onClick={openHelp} style={{ color: "black" }}>
                                    <FontAwesomeIcon icon={faMap} size="2xl" color='White' />
                                </button ></div>
                            </div>

                            <form>
                                <div className="row justify-content-center align-items-center">
                                    <input type="button" className={buttonColor} onClick={check} style={{ width: '475px' }} defaultValue="Comprobar" />
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

                <div class="modal fade" id="exampleModalToggle2" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div class="modal-dialog modal-dialog-centered  modal-xl">
                        <div class="modal-content modalcolor">


                            <div class="modal-body">
                                <div className="row justify-content-center align-items-center">
                                    <img
                                        src={level}
                                        className="img-fluid"
                                        alt="Descripción de la imagen"
                                        style={{ width: '300px', height: '500px' }}
                                    />


                                    <img
                                        src={tablaM}
                                        className="img-fluid bottom-60 start-0"
                                        alt="Descripción de la imagen "
                                        style={{ width: '800px', height: '800px' }}
                                    />
                                    <div className="position-absolute start-50 translate-middle" style={{ top: "5%" }}>
                                        <Countdown key={key} />
                                    </div>
                                </div>


                                <div class="container justify-content-center align-items-center ">
                                    <div class={`row justify-content-center align-items-center  ${cBSize}`}>
                                        <div class="row gy-1  gx-5">
                                            {levelOne}

                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </body >

        </>);

};

export default Game;