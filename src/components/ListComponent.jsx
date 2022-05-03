import React, { useState } from 'react'
import { v4 as uuid } from "uuid";

const ListComponent = ({ tareas = [], dispatch }) => {

    const [data, setData] = useState({ tarea: "", estado: "false" });

  const { tarea, estado } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    const actionAdd = {
      type: "add",
      payload: {
        id: uuid(),
        tarea,
        estado,
      },
    };
    dispatch(actionAdd);
  };

  const handleCheck = (id,estado) => {
    const checkAction = {
        type: "check",
        payload: {
            id,
            estado
          },
      };
    dispatch(checkAction);
  };

    return (
        <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Agregar tarea:{" "}
          <input
            onChange={handleChange}
            name="tarea"
            value={tarea}
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <div className="mx-1 d-grid gap-2">
          <button onClick={handleAdd} className="btn btn-info mt-2">
            Agregar
          </button>
        </div>
      </div>
      <table className="table">
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((dato) => {
          if(dato.estado === true){
            return (
              <tr key={dato.id}>
                <td>{dato.tarea}</td>
                <td>
                <input onChange={() => handleCheck(dato.id,dato.estado)} name="estado" className="form-check-input" type="checkbox" id={dato.id} checked/>
                </td>
              </tr>
            );
          }else{
            return (
              <tr key={dato.id}>
                <td>{dato.tarea}</td>
                <td>
                <input onChange={() => handleCheck(dato.id,dato.estado)} name="estado" className="form-check-input" type="checkbox" id={dato.id}/>
                </td>
              </tr>
            );
          }
            

          
        })}
      </tbody>
    </table>
    </>
    );
}

export default ListComponent
