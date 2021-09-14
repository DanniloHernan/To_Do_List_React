

export const TareasReducer = (state = [], action) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
  
      case "check":
        const check = document.getElementById(action.payload.id)
        console.log(check.checked)
        if(check.checked === false){
          //check.removeAttribute("checked");
          console.log("Tarea pendiente")
        }else{
          
          let dataStorage = JSON.parse(localStorage.getItem("tareas"));
          dataStorage.forEach(element => {
            if (element.id === action.payload.id){
              element.estado = true
              localStorage.setItem("tareas", JSON.stringify(dataStorage));
              
            }
          });
          console.log("Tarea terminda")
        };
      default:
        return state;
    }
  };