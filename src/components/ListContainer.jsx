import React, { useEffect, useReducer } from 'react'
import { TareasReducer } from "../reducers/tareasReducer";
import ListComponent from './ListComponent'

const init = () => {
    const tareas = localStorage.getItem("tareas");
    
    return tareas ? JSON.parse(tareas) : [];
  };

const ListContainer = () => {
    const [state, dispatch] = useReducer(TareasReducer, [], init);

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(state));
    }, [state]);

    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <h1 className="navbar-brand">Lista de cosas por hacer</h1>
            </div>
        </nav>
        <ListComponent tareas={state} dispatch={dispatch} />
        </>
    )
}

export default ListContainer
