import React, { useContext, useState } from "react";
import './logingame.css'
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";
import Swal from 'sweetalert2';
const LoginGame = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const [team, setTeam] = useState([]);
    const addTeam = () => {
        const input = document.getElementById("login")
        team.push({ name: input.value, points: 0 })
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `El equipo ${input.value} se ha agregado de manera correcta.`,
            showConfirmButton: false,
            timer: 3000
        });
        console.log(team);
    }
    const goToTheGame = () => {
        if (team.length > 0) {
            navigate('/Game')
            dispatch({ type: authTypes.login, teams: team })
        }else{
            Swal.fire({
                position: 'top-center',
                icon: 'question',
                title: 'Debes agregar almenos un jugador.',
                showConfirmButton: false,
                timer: 1500
            });
        }


    }
    return (

        <body className='block-scroll body'>

            <div className="py-8 h-200 wrapper fadeInDown ">
                <div className="row justify-content-center align-items-center ">
                    <div className="row justify-content-center align-items-center  " id="formContent" >
                        {/* Tabs Titles */}
                        <h2 className="active"> Math Tables </h2>

                        {/* Icon */}
                        <div className="fadeIn first">
                            <img
                                src=''
                                id="icon"
                                alt="User Icon"
                            />
                        </div>
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
                            <input type="button" className="fadeIn fourth button-orange" defaultValue="Instrucciones" />
                            <div>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </body>
    );

};

export default LoginGame;